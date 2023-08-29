import "./OnlineOffline.css";

export default function OnlineOffline({ isOnline = true }) {
  const style = isOnline ? "bg-green" : "bg-red";

  return (
    <div className="on-container">
      <span className={style}>{isOnline ? "Online" : "Offline"}</span>
    </div>
  );
}
