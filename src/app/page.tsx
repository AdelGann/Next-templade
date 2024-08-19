import { CardComponent } from "./Custom/components/Card";

export default function Home() {
	return (
		<main className="min-h-screen bg-neutral-200 p-24">
			<div className="flex justify-between">
				<div>
					<h1 className="text-6xl font-bold font-bebas">Templade</h1>
					<h3 className="text-3xl font-bold font-patrick">Fast, Easy and Secure</h3>
					<h3 className="text-xl font-bold font-patrick">
						the most easy way to buy online, secure and fast.
					</h3>
				</div>
        <div>
          <CardComponent/>
        </div>
			</div>
		</main>
	);
}
