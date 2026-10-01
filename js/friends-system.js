.review-container{display:grid;grid-template-columns:320px 1fr 300px;gap:20px;padding:24px;background:#111827;min-height:calc(100vh - 72px)}
.review-left,.review-right{background:#1f2937;border:1px solid #374151;border-radius:16px;padding:18px}
.review-center{background:#111827;display:flex;flex-direction:column;align-items:center;gap:18px}
.game-header{display:flex;flex-direction:column;gap:18px;padding-bottom:16px;border-bottom:1px solid #374151}
.players-info{display:flex;align-items:center;justify-content:space-between;gap:12px}
.player{display:flex;flex-direction:column;gap:6px;flex:1}
.player-name{display:flex;align-items:center;gap:8px;font-weight:700;color:#f1f5f9}
.player-elo{color:#cbd5e1;font-size:.85rem}
.vs-divider{font-weight:700;color:#94a3b8}
.game-result{display:flex;flex-direction:column;gap:6px;margin-top:10px}
.result-text{font-size:1.7rem;font-weight:700;color:#4ade80}
.result-detail{color:#cbd5e1;font-size:.9rem}
.stats-section,.game-info-section{margin-top:20px;padding-top:16px;border-top:1px solid #374151}
.stats-section h3,.game-info-section h3,.review-right h3{margin-bottom:14px;font-size:1.1rem;color:#f1f5f9}
.player-stats{margin-top:12px;display:flex;flex-direction:column;gap:10px;padding:12px;background:#0f172a;border-radius:12px}
.player-stats h4{font-size:.95rem;margin-bottom:8px;color:#e2e8f0}
.stat-row,.info-row{display:flex;justify-content:space-between;gap:12px;color:#dbeafe;font-size:.92rem}
.review-board{width:min(100%,470px);max-width:100%}
.replay-controls{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.control-btn{background:#2563eb;color:white;border:none;border-radius:10px;padding:10px 14px;cursor:pointer}
.move-counter{background:#1e293b;border:1px solid #475569;border-radius:10px;padding:10px 14px;color:#e2e8f0;font-weight:700}
.current-move-info{width:min(100%,700px);background:#111827;border:1px solid #374151;border-radius:12px;padding:16px}
.move-details{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:12px 0}
.move-notation{font-size:1.3rem;font-weight:700;color:#f8fafc;min-width:50px}
.move-classification{display:inline-flex;align-items:center;gap:8px;padding:6px 10px;border-radius:999px;background:#1e293b;border:2px solid #475569;font-weight:700}
.classification-icon{font-size:1.2rem}
.classification-name{font-size:.9rem}
.move-description{color:#cbd5e1;font-size:.95rem}
.moves-list{max-height:620px;overflow:auto;display:flex;flex-direction:column;gap:10px;margin-top:8px}
.move-entry{display:grid;grid-template-columns:1fr auto auto;gap:8px;align-items:center;padding:10px 8px;border-radius:10px;background:#0f172a;border:1px solid #374151;cursor:pointer}
.move-entry.active{border-color:#4ade80;background:#0b1f16}
.move-entry .move-number{color:#94a3b8;font-size:.8rem;font-weight:700}
.move-entry .move-text{color:#f8fafc;font-weight:600}
.move-entry .move-rating{display:inline-flex;align-items:center;justify-content:center;min-width:40px;font-weight:700;padding:4px 6px;border-radius:8px;color:white;font-size:.8rem}
@media (max-width:1000px){.review-container{grid-template-columns:1fr}}
