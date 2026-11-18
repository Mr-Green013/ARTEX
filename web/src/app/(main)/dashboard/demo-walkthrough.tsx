import Link from "next/link";

import { ActivityIcon, ArrowUpRightIcon, BugIcon, ShieldCheckIcon } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    title: "Review task activity",
    detail: "Open the Acme assessment session and inspect the recorded agent and tool activity.",
    href: "/function/tasks/detail?id=t-acme-web",
    icon: ActivityIcon,
  },
  {
    title: "Compare finding evidence",
    detail: "Open Associated traffic on the order access finding and compare the normal reference and vulnerability proof.",
    href: "/function/findings/detail?id=f-2",
    icon: BugIcon,
  },
  {
    title: "Make an approval decision",
    detail: "Expand request #95 for the evidence summary, choose Allow or Reject, then check the record.",
    href: "/system/intercept/approvals",
    icon: ShieldCheckIcon,
  },
];

export function DemoWalkthrough() {
  return (
    <section id="demo-walkthrough" aria-labelledby="demo-walkthrough-title" className="scroll-mt-16">
      <Card className="gap-4 border-primary/25">
        <CardHeader>
          <CardTitle>
            <h2 id="demo-walkthrough-title">ARTEX demo walkthrough</h2>
          </CardTitle>
          <CardDescription>
            Replay a sample assessment. Decisions stay in this browser tab until you reload.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="grid gap-3 md:grid-cols-3">
            {steps.map(({ title, detail, href, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex h-full flex-col gap-2 rounded-lg border bg-background p-3 transition-colors hover:border-primary/50 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
                >
                  <span className="flex items-center gap-2 font-medium text-sm">
                    <Icon aria-hidden="true" className="size-4 shrink-0 text-primary" />
                    {title}
                    <ArrowUpRightIcon aria-hidden="true" className="ml-auto size-4 shrink-0 text-muted-foreground" />
                  </span>
                  <span className="text-muted-foreground text-xs leading-relaxed">{detail}</span>
                </Link>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </section>
  );
}
