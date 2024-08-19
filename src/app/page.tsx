import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";

export default function Home() {
	return (
		<main className="min-h-screen bg-neutral-200 p-24 dark:bg-neutral-700 ">
			<div className="flex flex-col gap-10">
				<div>
					<h1 className="text-6xl font-bold font-bebas">Templade</h1>
					<h3 className="text-3xl font-bold font-patrick">Fast, Easy & Secure</h3>
					<h3 className="text-xl font-bold font-patrick">
						the most easy way to buy online, secure and fast.
					</h3>
				</div>
				<div>
					<div>
						<Card className="flex flex-col gap-5 p-4 w-[200px] h-auto">
							<CardTitle className="text-2sm text-bebas font-semibold">
								Don't have an account yet?
							</CardTitle>
							<CardDescription className="text-sm font-patrick">
								Don't waste your time and join us, we will give you exactly what you need
							</CardDescription>
							<CardFooter>
								<Button className="font-ubuntu">Join Us!</Button>
							</CardFooter>
						</Card>
					</div>
				</div>
			</div>
			<div></div>
		</main>
	);
}
