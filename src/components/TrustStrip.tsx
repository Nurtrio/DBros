import { CheckCircle, Zap, Heart, Star } from 'lucide-react';

const items = [
  { icon: CheckCircle, label: 'Licensed & Insured' },
  { icon: Zap, label: 'Same-Day Delivery' },
  { icon: Heart, label: 'Hospital-Grade Clean' },
  { icon: Star, label: '5-Star Rated' },
];

export default function TrustStrip() {
  return (
    <div className="py-10 border-t border-b border-ice bg-snow">
      <div className="max-w-[1240px] mx-auto px-8 flex items-center justify-between gap-6 flex-wrap max-md:justify-center">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="w-11 h-11 bg-[#e6eaff] rounded-[10px] flex items-center justify-center shrink-0">
              <Icon size={20} className="text-[#0031e2]" />
            </div>
            <span className="text-lg font-semibold text-charcoal">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
