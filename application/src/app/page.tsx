
const orders = [
  { id: "DC-001", client: "Sarah M.", product: "Gâteau d'anniversaire", date: "10 nov. 2026", amount: "85,00 €", status: "En préparation" },
  { id: "DC-002", client: "Inès A.", product: "Number cake", date: "11 nov. 2026", amount: "65,00 €", status: "Confirmée" },
  { id: "DC-003", client: "Mehdi B.", product: "Wedding cake", date: "12 nov. 2026", amount: "240,00 €", status: "En attente" },
  { id: "DC-004", client: "Léa C.", product: "Box de cupcakes", date: "13 nov. 2026", amount: "38,00 €", status: "Confirmée" },
];

const stats = [
  { label: "Chiffre d'affaires", value: "4 280 €", detail: "+12,5 % ce mois", icon: "€" },
  { label: "Commandes", value: "48", detail: "8 à traiter", icon: "▤" },
  { label: "Clients", value: "126", detail: "+14 ce mois", icon: "♙" },
  { label: "Panier moyen", value: "89,17 €", detail: "+5,2 % ce mois", icon: "↗" },
];

const navigation = [
  ["⌂", "Tableau de bord"],
  ["▤", "Commandes"],
  ["♙", "Clients"],
  ["◇", "Catalogue"],
  ["▦", "Production"],
  ["▥", "Stocks"],
  ["€", "Finances"],
  ["▧", "Statistiques"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f6] text-[#382b28] md:flex">
      <aside className="hidden w-64 shrink-0 flex-col border-r border-[#eee7e2] bg-white p-6 md:flex">
        <div className="mb-12">
          <div className="text-2xl font-semibold tracking-tight">Délices Cakes<span className="text-[#c58c88]">.</span></div>
          <p className="mt-1 text-xs tracking-[0.2em] text-[#a18d85]">MANAGER</p>
        </div>

        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#ad9b93]">Menu principal</p>
        <nav className="space-y-2">
          {navigation.map(([icon, label], index) => (
            <div key={label} className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm ${index === 0 ? "bg-[#f7eae8] font-semibold text-[#a65f60]" : "text-[#776964] hover:bg-[#faf5f2]"}`}>
              <span className="text-lg">{icon}</span>
              {label}
            </div>
          ))}
        </nav>

        <div className="mt-auto rounded-2xl bg-[#f8efeb] p-4">
          <p className="text-sm font-semibold">Délices Cakes</p>
          <p className="mt-1 text-xs text-[#8e7770]">Espace de gestion</p>
          <p className="mt-4 text-xs text-[#a65f60]">Version de démonstration</p>
        </div>
      </aside>

      <section className="min-w-0 flex-1 p-5 md:p-9">
        <header className="mb-9 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-[#9b8981]">Mardi 10 novembre 2026</p>
            <h1 className="mt-1 text-2xl font-semibold md:text-3xl">Tableau de bord</h1>
            <p className="mt-2 text-sm text-[#8e7e77]">Bienvenue dans votre espace de gestion.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-xl border border-[#eee4df] bg-white px-4 py-3 text-sm">Notifications</button>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ead3ce] font-semibold text-[#895e58]">DC</div>
          </div>
        </header>

        <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-[#eee7e2] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#8e7e77]">{stat.label}</p>
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f8efeb] text-lg text-[#a65f60]">{stat.icon}</span>
              </div>
              <p className="mt-4 text-2xl font-semibold">{stat.value}</p>
              <p className="mt-2 text-xs text-[#9b8981]">{stat.detail}</p>
            </article>
          ))}
        </div>

        <div className="mb-7 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <article className="rounded-2xl border border-[#eee7e2] bg-white p-6 lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="font-semibold">Activité commerciale</h2>
                <p className="mt-1 text-xs text-[#9b8981]">Évolution du chiffre d'affaires</p>
              </div>
              <span className="rounded-lg bg-[#f8efeb] px-3 py-2 text-xs text-[#a65f60]">Ce mois</span>
            </div>
            <div className="flex h-44 items-end justify-between gap-3 border-b border-[#eee7e2] px-2">
              {[35, 52, 43, 70, 58, 82, 65, 92, 72, 100, 80, 88].map((height, index) => (
                <div key={index} className="flex h-full flex-1 items-end">
                  <div className="w-full rounded-t-md bg-[#d9aaa3]" style={{ height: `${height}%` }} />
                </div>
              ))}
            </div>
            <div className="mt-3 flex justify-between text-xs text-[#a18d85]">
              <span>1 nov.</span><span>5 nov.</span><span>10 nov.</span><span>15 nov.</span><span>20 nov.</span><span>30 nov.</span>
            </div>
          </article>

          <article className="rounded-2xl border border-[#eee7e2] bg-white p-6">
            <h2 className="font-semibold">À suivre</h2>
            <p className="mt-1 text-xs text-[#9b8981]">Votre activité aujourd'hui</p>
            <div className="mt-6 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#776964]">Commandes à préparer</span>
                <span className="font-semibold">08</span>
              </div>
              <div className="h-2 rounded-full bg-[#f1eae6]"><div className="h-2 w-2/3 rounded-full bg-[#c58c88]" /></div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#776964]">Paiements en attente</span>
                <span className="font-semibold">03</span>
              </div>
              <div className="h-2 rounded-full bg-[#f1eae6]"><div className="h-2 w-1/3 rounded-full bg-[#d8b18a]" /></div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#776964]">Livraisons à effectuer</span>
                <span className="font-semibold">05</span>
              </div>
              <div className="h-2 rounded-full bg-[#f1eae6]"><div className="h-2 w-1/2 rounded-full bg-[#a9b9a1]" /></div>
            </div>
          </article>
        </div>

        <article className="overflow-hidden rounded-2xl border border-[#eee7e2] bg-white">
          <div className="flex flex-wrap items-center justify-between gap-3 p-6">
            <div>
              <h2 className="font-semibold">Dernières commandes</h2>
              <p className="mt-1 text-xs text-[#9b8981]">Suivi des commandes récentes</p>
            </div>
            <button className="rounded-xl bg-[#a65f60] px-4 py-3 text-sm font-medium text-white">+ Nouvelle commande</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left text-sm">
              <thead className="bg-[#faf8f6] text-xs text-[#9b8981]">
                <tr>
                  <th className="px-6 py-4 font-medium">Référence</th>
                  <th className="px-6 py-4 font-medium">Client</th>
                  <th className="px-6 py-4 font-medium">Produit</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Montant</th>
                  <th className="px-6 py-4 font-medium">Statut</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-t border-[#f0ebe7]">
                    <td className="px-6 py-4 font-medium">{order.id}</td>
                    <td className="px-6 py-4">{order.client}</td>
                    <td className="px-6 py-4">{order.product}</td>
                    <td className="px-6 py-4 text-[#8e7e77]">{order.date}</td>
                    <td className="px-6 py-4 font-medium">{order.amount}</td>
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-[#f8efeb] px-3 py-1 text-xs text-[#a65f60]">{order.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="border-t border-[#f0ebe7] px-6 py-4 text-xs text-[#a18d85]">Données fictives de démonstration — à remplacer par les données réelles de l'entreprise.</p>
        </article>
      </section>
    </main>
  );
}
