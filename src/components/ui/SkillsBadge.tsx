import React from 'react'

type SkillsBadgeProps = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

const SkillsBadge = ({ name, icon: Icon }: SkillsBadgeProps) => (
  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-slate-300 transition-colors hover:border-teal/40 hover:bg-teal/5">
    <Icon className="shrink-0 text-lg text-teal" />
    <span className="text-sm font-medium">{name}</span>
  </div>
);

export default SkillsBadge;
