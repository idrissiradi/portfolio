import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SkillCard } from "@/components/SkillCard";
import { skillIcons } from "@/constants/portfolio-data";

export const SkillsSection = () => {
    return (
        <section id="skills" className="w-full py-32  bg-accent/20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-5xl md:text-7xl font-bold mb-4">Technical Skills</h2>
                <p className="text-muted-foreground text-xl mb-16">
                    Here are some of the technologies that I am working with
                </p>

                <Tabs defaultValue="frontend" className="w-full">
                    <TabsList className="mb-12 h-auto p-0 bg-transparent border-b border-border rounded-none w-full justify-start flex-wrap">
                        <TabsTrigger
                            value="frontend"
                            className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-6 py-3 font-bold transition-all"
                        >
                            FRONTEND DEVELOPMENT
                        </TabsTrigger>
                        <TabsTrigger
                            value="backend"
                            className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-6 py-3 font-bold transition-all"
                        >
                            BACKEND DEVELOPMENT
                        </TabsTrigger>
                        <TabsTrigger
                            value="database"
                            className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-6 py-3 font-bold transition-all"
                        >
                            DATABASE & STORAGE
                        </TabsTrigger>
                        <TabsTrigger
                            value="tools"
                            className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-6 py-3 font-bold transition-all"
                        >
                            DEVELOPMENT TOOLS
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="frontend" className="mt-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                            {Object.entries(skillIcons.frontend).map(([ tech, Icon ]) => (
                                <SkillCard key={tech} tech={tech} icon={Icon} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="backend" className="mt-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                            {Object.entries(skillIcons.backend).map(([ tech, Icon ]) => (
                                <SkillCard key={tech} tech={tech} icon={Icon} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="database" className="mt-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                            {Object.entries(skillIcons.database).map(([ tech, Icon ]) => (
                                <SkillCard key={tech} tech={tech} icon={Icon} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="tools" className="mt-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                            {Object.entries(skillIcons.tools).map(([ tech, Icon ]) => (
                                <SkillCard key={tech} tech={tech} icon={Icon} />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};