import { motion } from "framer-motion";

interface SectionTagProps {
    label: string;
}

const SectionTag = ({ label }: SectionTagProps) => (
    <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-3"
    >
        <span className="text-muted-foreground">// </span>{label}
    </motion.p>
);

export default SectionTag;