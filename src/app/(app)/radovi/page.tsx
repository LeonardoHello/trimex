import { getProjects } from "@/api/getCollection";
import { getProjectsPage } from "@/api/getGlobal";
import { Badge } from "@/components/ui/badge";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { cn } from "@/utils/cn";

export default async function RadoviPage() {
  const projectsPagePromise = getProjectsPage();
  const projectsPromise = getProjects();

  const [projectsPage, projects] = await Promise.all([
    projectsPagePromise,
    projectsPromise,
  ]);

  return (
    <main>
      <div className="bg-[url('/autumn.svg')]">
        <Section className="min-h-[60vh] items-center bg-gradient-to-b from-secondary/5 from-60% to-background !pt-20 text-center lg:min-h-[75vh]">
          <Badge className="-mb-2 bg-secondary/30 text-secondary">
            {projectsPage.badge}
          </Badge>
          <h1 className="max-w-[18ch] scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            {projectsPage.title}
          </h1>
          <p className="max-w-[48ch] leading-7 text-secondary">
            Pogledajte naše dosadašnje projekte i uvjerite se kako možemo
            transformirati vaš vanjski prostor u lijepo održavanu oazu.
          </p>
        </Section>
      </div>

      <Section className="!pt-0">
        <LayoutGrid projects={projects.docs} />
      </Section>
    </main>
  );
}

function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "md:p-18 flex flex-col justify-center gap-4 px-6 py-14 sm:px-8 lg:px-32 lg:py-20",
        className,
      )}
    >
      {children}
    </section>
  );
}
