import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";

import Image from "next/image";
import { CarouselComponent } from "./Custom/components/CarouselComponent";
export default function Home() {
	return (
		<main className="flex sm:flex-row flex-col">
			<div className="flex bg-slate-100 w-100 p-12 lg:p-24 2xl:p-32 dark:bg-neutral-700 ">
				<div className="flex flex-col gap-10">
					<div>
						<h1 className="text-6xl font-bold font-bebas">Templade</h1>
						<h3 className="text-4xl font-bold font-patrick">Fast, Easy & Secure</h3>
						<h3 className="text-2xl font-bold font-patrick">
							the most easy way to buy online, secure and fast.
						</h3>
					</div>
					<div>
						<div>
							<Card className="flex flex-col justify- gap-5 p-4 w-[250px] h-auto dark:bg-neutral-700 self-center bg-neutral-100">
								<CardTitle className="text-lg text-bebas font-bold">
									Don't have an account?
								</CardTitle>
								<hr />
								<CardDescription className="text-2sm font-patrick font-bold ">
									Don't waste your time and join us, we will give you exactly what you need.
								</CardDescription>
								<Button className="font-ubuntu h-8 justify-self-center text-sm  ">
									Sign Up Now!
								</Button>
							</Card>
							<p className="text-gray-400 dark:text-gray-300 text-sm font-ubuntu py-4 px-2">
								Already have an account?{" "}
								<a className="hover:text-gray-800 dark:hover:text-gray-100" href="/">
									Sign In!
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="px-4 sm:px-16  p-6 lg:p-12    bg-[url('/bg.jpg')] flex justify-center bg-no-repeat bg-cover bg-center bg-fixed bg-blend-multiply bg-slate-500 dark:bg-slate-700 w-full min-h-screen min-h-screen-100%">
				<div>
					<CarouselComponent />
				</div>
			</div>
		</main>
	);
}
