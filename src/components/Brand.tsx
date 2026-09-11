import { Link } from 'react-router-dom';
import { CircleDot } from 'lucide-react';

export function Brand({ light = false }: { light?: boolean }) {
  return <Link to="/" className={`brand ${light ? 'brand--light' : ''}`} aria-label="Shopitrack, inicio"><CircleDot size={16} strokeWidth={3} /><span>Shopitrack</span></Link>;
}
