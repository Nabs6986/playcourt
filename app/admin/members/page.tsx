"use client";

import { FormEvent, useState } from "react";
import { Users } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { StatusBadge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { EmptyState } from "@/components/ui/EmptyState";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

type Member = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  role: "admin" | "member";
  status: "active" | "inactive";
};

type NewMemberState = {
  name: string;
  email: string;
  phone: string;
  role: "admin" | "member";
};

export default function AdminMembersPage() {
  const [clubId, setClubId] = useState("");
  const [q, setQ] = useState("");
  const [rows, setRows] = useState<Member[]>([]);
  const [newMember, setNewMember] = useState<NewMemberState>({ name: "", email: "", phone: "", role: "member" });
  const [result, setResult] = useState<string | null>(null);

  async function loadMembers(e?: FormEvent) {
    e?.preventDefault();
    const res = await fetch(`/api/admin/members?clubId=${clubId}&q=${encodeURIComponent(q)}`);
    const data = await res.json();
    if (res.ok) setRows(data.members ?? []);
    else setResult(data.error ?? "Failed to load members");
  }

  async function createMember(e: FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/admin/members", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clubId, ...newMember })
    });
    const data = await res.json();
    setResult(JSON.stringify(data, null, 2));
    if (res.ok) {
      setNewMember({ name: "", email: "", phone: "", role: "member" });
      await loadMembers();
    }
  }

  async function deactivate(memberId: string) {
    const res = await fetch(`/api/admin/members/${memberId}`, { method: "DELETE" });
    const data = await res.json();
    setResult(JSON.stringify(data, null, 2));
    if (res.ok) await loadMembers();
  }

  return (
    <div className="max-w-5xl">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://playcourt.io" },
          { name: "Admin", url: "https://playcourt.io/admin" },
          { name: "Members", url: "https://playcourt.io/admin/members" },
        ]}
      />
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-900">Members</h1>
        <p className="mt-1 text-sm text-slate-500">Manage your club members and roles.</p>
      </div>

      <Card className="mb-6">
        <form onSubmit={loadMembers} className="grid gap-4 md:grid-cols-3">
          <div>
            <Label htmlFor="m-club-id">Club ID</Label>
            <Input id="m-club-id" className="mt-1.5" placeholder="Club ID" value={clubId} onChange={(e) => setClubId(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="m-search">Search</Label>
            <Input id="m-search" className="mt-1.5" placeholder="Name, email, or phone" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          <div className="flex items-end">
            <Button type="submit" variant="secondary" className="w-full">Search</Button>
          </div>
        </form>
      </Card>

      <Card className="mb-6">
        <h2 className="mb-4 text-base font-semibold text-slate-900">Add New Member</h2>
        <form onSubmit={createMember} className="grid gap-4 md:grid-cols-5">
          <div>
            <Label>Name</Label>
            <Input className="mt-1.5" placeholder="Name" value={newMember.name} onChange={(e) => setNewMember((m) => ({ ...m, name: e.target.value }))} />
          </div>
          <div>
            <Label>Email</Label>
            <Input className="mt-1.5" placeholder="Email" value={newMember.email} onChange={(e) => setNewMember((m) => ({ ...m, email: e.target.value }))} />
          </div>
          <div>
            <Label>Phone</Label>
            <Input className="mt-1.5" placeholder="Phone" value={newMember.phone} onChange={(e) => setNewMember((m) => ({ ...m, phone: e.target.value }))} />
          </div>
          <div>
            <Label>Role</Label>
            <select
              className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              value={newMember.role}
              onChange={(e) => setNewMember((m) => ({ ...m, role: e.target.value as "admin" | "member" }))}
            >
              <option value="member">Member</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="flex items-end">
            <Button type="submit" className="w-full">Add Member</Button>
          </div>
        </form>
      </Card>

      {rows.length > 0 ? (
        <Card className="overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 font-medium text-slate-500">Name</th>
                  <th className="px-4 py-3 font-medium text-slate-500">Email</th>
                  <th className="px-4 py-3 font-medium text-slate-500">Phone</th>
                  <th className="px-4 py-3 font-medium text-slate-500">Role</th>
                  <th className="px-4 py-3 font-medium text-slate-500">Status</th>
                  <th className="px-4 py-3 font-medium text-slate-500">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Avatar name={r.name} size="sm" />
                        <span className="font-medium text-slate-900">{r.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-slate-600">{r.email}</td>
                    <td className="px-4 py-3 text-slate-600">{r.phone ?? "-"}</td>
                    <td className="px-4 py-3"><StatusBadge status={r.role} /></td>
                    <td className="px-4 py-3"><StatusBadge status={r.status} /></td>
                    <td className="px-4 py-3">
                      <Button variant="ghost" size="sm" onClick={() => deactivate(r.id)} type="button">
                        Deactivate
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      ) : (
        <EmptyState
          icon={<Users className="h-12 w-12" />}
          title="No members loaded"
          description="Enter a Club ID and search to view members."
        />
      )}

      {result ? <pre className="mt-6 rounded-xl bg-slate-900 p-4 text-xs text-slate-100 overflow-x-auto">{result}</pre> : null}
    </div>
  );
}
