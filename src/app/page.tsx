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
						<Card className="flex flex-col justify- gap-5 p-4 w-[210px] h-auto dark:bg-neutral-700 self-center bg-neutral-100">
							<CardTitle className="text-2sm text-bebas font-bold">
								Don't have an account?
							</CardTitle>
							<hr />
							<CardDescription className="text-sm font-patrick font-bold ">
								Don't waste your time and join us, we will give you exactly what you need.
							</CardDescription>
							<CardFooter>
								<Button className="font-ubuntu h-5 justify-self-center text-sm  ">
									Sign Up Now!
								</Button>
							</CardFooter>
						</Card>
					</div>
				</div>
			</div>
			<div></div>
		</main>
	);
}
