import Image from "next/image";
import { profile } from "@/data/portfolio";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="mb-2 text-sm font-medium tracking-widest text-muted-foreground uppercase">
        About
      </h2>
      <h3 className="mb-6 text-3xl font-bold tracking-tight">About Me</h3>
      <Separator className="mb-8" />

      <div className="grid gap-8 md:grid-cols-[200px_1fr]">
        <div className="flex justify-center md:justify-start">
          {profile.profileImage ? (
            <div className="h-60 w-48 overflow-hidden rounded-2xl">
              <Image
                src={profile.profileImage}
                alt={profile.name}
                width={192}
                height={192}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="flex h-48 w-48 items-center justify-center overflow-hidden rounded-2xl bg-muted text-4xl text-muted-foreground">
              {profile.name.charAt(0)}
            </div>
          )}
        </div>

        <div>
          <table className="w-full text-left text-sm">
            <tbody>
              {profile.bio.map((item) => (
                <tr key={item.label} className="border-b border-border/50 last:border-0">
                  <th className="whitespace-nowrap py-3 pr-6 align-top font-semibold text-foreground">
                    {item.label}
                  </th>
                  <td className="whitespace-pre-line py-3 text-muted-foreground">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
