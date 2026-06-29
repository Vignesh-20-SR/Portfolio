import { ImageIcon } from "./Icons";
import "./Placeholder.css";

const GRADIENTS = {
  ink: "linear-gradient(135deg, #0b1220 0%, #1b2740 60%, #16324a 100%)",
  amber: "linear-gradient(135deg, #1b2740 0%, #3a2a18 70%, #5a3a14 100%)",
  teal: "linear-gradient(135deg, #0b1220 0%, #123a37 70%, #155a51 100%)",
};

/**
 * A labeled placeholder tile. Swap with a real <img> once you have
 * the asset — same aspect ratio, same border radius.
 */
export default function Placeholder({ label, sublabel, tone = "ink", className = "" }) {
  return (
    <div className={`ph ${className}`} style={{ backgroundImage: GRADIENTS[tone] }}>
      <div className="ph-grid" aria-hidden="true" />
      <div className="ph-content">
        <ImageIcon className="ph-icon" />
        {label && <span className="ph-label">{label}</span>}
        {sublabel && <span className="ph-sublabel">{sublabel}</span>}
      </div>
      <span className="ph-tag">placeholder</span>
    </div>
  );
}
