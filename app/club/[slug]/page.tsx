import { db } from "@/lib/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, Clock, ChevronRight, Wifi, Car, ShowerHead, Users, Coffee, Dumbbell } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

// Mock amenities data - would come from DB in production
const amenityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  wifi: Wifi,
  parking: Car,
  showers: ShowerHead,
  "pro-shop": Coffee,
  clubhouse: Users,
  "fitness-center": Dumbbell,
};

const mockAmenities = [
  { id: "wifi", name: "Free WiFi", icon: "wifi" },
  { id: "parking", name: "Free Parking", icon: "parking" },
  { id: "showers", name: "Locker Rooms", icon: "showers" },
  { id: "clubhouse", name: "Clubhouse", icon: "clubhouse" },
];

// Format operating hours for display
function formatOperatingHours(hours: Array<{ dayOfWeek: number; openTime: string; closeTime: string; isClosed: boolean }>): {
  weekday: string;
  weekend: string;
} {
  // Find weekday hours (Monday = 1)
  const weekdayHour = hours.find(h => h.dayOfWeek >= 1 && h.dayOfWeek <= 5 && !h.isClosed);
  // Find weekend hours (Saturday = 6, Sunday = 0)
  const weekendHour = hours.find(h => (h.dayOfWeek === 0 || h.dayOfWeek === 6) && !h.isClosed);

  return {
    weekday: weekdayHour ? `${weekdayHour.openTime} - ${weekdayHour.closeTime}` : "Closed",
    weekend: weekendHour ? `${weekendHour.openTime} - ${weekendHour.closeTime}` : "Closed",
  };
}

export default async function ClubProfilePage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const club = await db.club.findUnique({
    where: { slug: params.slug },
    include: {
      courts: { where: { isActive: true }, orderBy: { sortOrder: "asc" } },
      media: { orderBy: { sortOrder: "asc" } },
      hours: { orderBy: { dayOfWeek: "asc" } },
    }
  });

  if (!club) {
    notFound();
  }

  // Get hero image from media or use placeholder
  const heroImage = club.media?.[0]?.url || null;

  // Format operating hours
  const operatingHours = formatOperatingHours(club.hours);

  return (
    <div className="min-h-screen bg-slate-50">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://playcourt.io" },
          { name: "Clubs", url: `https://playcourt.io/club/${club.slug}` },
          { name: club.name, url: `https://playcourt.io/club/${club.slug}` },
        ]}
      />
      {/* Navigation Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200/50 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <span className="text-lg font-semibold text-slate-900">{club.name}</span>
          <div className="flex items-center gap-3">
            <Link
              href={`/club/${club.slug}/my-bookings`}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100"
            >
              My Bookings
            </Link>
            <Link
              href={`/club/${club.slug}/book`}
              className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-brand-600 hover:shadow-md hover:-translate-y-0.5"
            >
              Book a Court
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        {heroImage ? (
          <div className="h-64 w-full overflow-hidden sm:h-80 lg:h-96">
            <img
              src={heroImage}
              alt={`${club.name} courts`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
        ) : (
          <div className="h-64 w-full bg-gradient-to-br from-brand-600 via-brand-500 to-green-400 sm:h-80 lg:h-96">
            {/* Decorative tennis court pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute left-1/4 right-1/4 top-1/4 bottom-1/4 border-4 border-white rounded-lg" />
              <div className="absolute left-1/2 top-1/4 bottom-1/4 w-0.5 bg-white" />
            </div>
          </div>
        )}
        
        {/* Club name overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl drop-shadow-lg">
              {club.name}
            </h1>
            {club.address && (
              <p className="mt-2 flex items-center gap-2 text-white/90 drop-shadow">
                <MapPin className="h-4 w-4" />
                {club.address}
              </p>
            )}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-6 py-8">
        {/* Quick Actions - Mobile */}
        <div className="mb-8 flex gap-3 sm:hidden">
          <Link href={`/club/${club.slug}/book`} className="flex-1">
            <Button className="w-full" size="lg">Book a Court</Button>
          </Link>
          <Link href={`/club/${club.slug}/my-bookings`} className="flex-1">
            <Button variant="secondary" className="w-full" size="lg">My Bookings</Button>
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <Card className="p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-slate-900">About</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Welcome to {club.name}! We offer {club.courts.length} well-maintained tennis court{club.courts.length !== 1 ? "s" : ""} for players of all skill levels. Our facility provides a great environment for both recreational play and competitive matches.
              </p>
              
              {/* Amenities */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Amenities
                </h3>
                <div className="mt-3 flex flex-wrap gap-3">
                  {mockAmenities.map((amenity) => {
                    const Icon = amenityIcons[amenity.icon] || Users;
                    return (
                      <div
                        key={amenity.id}
                        className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                      >
                        <Icon className="h-4 w-4 text-slate-500" />
                        {amenity.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>

            {/* Courts Section */}
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-900">Courts</h2>
                <span className="text-sm text-slate-500">
                  {club.courts.length} court{club.courts.length !== 1 ? "s" : ""} available
                </span>
              </div>
              
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {club.courts.map((court) => (
                  <Card key={court.id} className="group p-5 transition-all hover:border-brand-200 hover:shadow-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-slate-900">{court.name}</p>
                        {court.surfaceType && (
                          <Badge className="mt-1.5" variant="default">
                            {court.surfaceType}
                          </Badge>
                        )}
                      </div>
                      <Link
                        href={`/club/${club.slug}/book?court=${court.id}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition-all group-hover:bg-brand-500 group-hover:text-white"
                        aria-label={`Book ${court.name}`}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>

              {club.courts.length === 0 && (
                <Card className="p-8 text-center">
                  <p className="text-slate-500">No courts available at this time.</p>
                </Card>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card className="p-6">
              <h3 className="font-semibold text-slate-900">Contact Info</h3>
              <div className="mt-4 space-y-3">
                {club.address && (
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
                    <span className="text-slate-600">{club.address}</span>
                  </div>
                )}
                {club.phone && (
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 flex-shrink-0 text-slate-400" />
                    <a 
                      href={`tel:${club.phone}`}
                      className="text-slate-600 hover:text-brand-600 transition-colors"
                    >
                      {club.phone}
                    </a>
                  </div>
                )}
              </div>
            </Card>

            {/* Hours Card */}
            <Card className="p-6">
              <h3 className="font-semibold text-slate-900">Hours</h3>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-600">Open daily</span>
                </div>
                <div className="mt-3 rounded-lg bg-slate-50 p-3">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="font-medium text-slate-700">Mon-Fri</span>
                      <p className="text-slate-500">{operatingHours.weekday}</p>
                    </div>
                    <div>
                      <span className="font-medium text-slate-700">Sat-Sun</span>
                      <p className="text-slate-500">{operatingHours.weekend}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* CTA Card */}
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-br from-brand-500 to-brand-600 p-6 text-white">
                <h3 className="font-semibold">Ready to play?</h3>
                <p className="mt-1 text-sm text-white/80">
                  Book your court in just a few clicks
                </p>
                <Link href={`/club/${club.slug}/book`}>
                  <Button 
                    variant="secondary" 
                    className="mt-4 w-full bg-white text-brand-600 hover:bg-white/90"
                  >
                    Book Now
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} {club.name}. Powered by TennisHQ
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-700 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-700 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
