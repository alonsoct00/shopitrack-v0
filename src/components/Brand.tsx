import { CircleDot } from 'lucide-react';

export function Brand({ light = false }: { light?: boolean }) {
  return <a href="#inicio" className={`brand ${light ? 'brand--light' : ''}`} aria-label="Shopitrack, inicio"><CircleDot size={16} strokeWidth={3} /><span>Shopitrack</span></a>;
}
