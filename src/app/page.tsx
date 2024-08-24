import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

import { CarouselComponent } from "./Custom/components/CarouselComponent";
import { Input } from "@/components/ui/input";
import {  ArrowRight, Search } from "lucide-react";

export default function Home() {
	return (
		<main className="flex sm:flex-row flex-col">
			<div className="flex bg-slate-100 w-100 p-12 lg:p-24 2xl:p-32 dark:bg-neutral-700 ">
				<div className="flex items-center content-center flex-col gap-10">
					<div>
						<h1 className="text-6xl font-bold font-bebas">Templade</h1>
						<h3 className="text-4xl font-bold font-patrick">Fast, Easy & Secure</h3>
						<h3 className="text-2xl font-bold font-patrick">
							the most easy way to buy online, secure and fast.
						</h3>
					</div>
					<div>
						<div>
							<Card className="flex flex-col justify-center gap-5 p-4 w-[250px] h-auto dark:bg-neutral-700 self-center bg-neutral-100">
								<CardTitle className="text-lg text-bebas font-bold">
									Don&apos;t have an account?
								</CardTitle>
								<hr />
								<CardDescription className="text-sm font-patrick font-bold ">
									Don&apos;t waste your time and join us, we will give you exactly what you need.
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
			<div className="px-4 sm:px-16 items-center content-center flex-col p-6 lg:p-12 flex gap-5 justify-center  bg-[url('/bg.jpg')] flex justify-center bg-no-repeat bg-cover bg-center bg-fixed bg-blend-multiply bg-slate-500 dark:bg-slate-700 w-full min-h-screen min-h-screen-100%">
				<div className="w-full flex gap-5">
					<Button variant="outline" size="icon" className="">
						<Search className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
					</Button>
					<Input type="text" placeholder="Search" className="text-white font-bebas text-lg" />
				</div>
				<div>
					<p className="text-slate-200 text-sm font-ubuntu">
						Your journey starts here, looking for the things that you need
					</p>
				</div>
				<div className="bg-slate-100 dark:bg-neutral-700 w-full rounded-lg m-2 p-5">
					<div className="flex justify-between font-bebas">
						<h1 className=" text-4xl font-bold m-2">Latest products available</h1>
						<h5 className="flex hover:underline hover:cursor-pointer">
							<a href="" className="">View More</a>
							<ArrowRight size={20}/>
						</h5>
					</div>
					<div className="flex gap-4 w-full p-4">
						<Card>
							<CardContent>
								<h4 className="p-6 text-sm font-bold font-bebas"></h4>
							</CardContent>
						</Card>
						<Card>
							<CardContent>
								<h4 className="p-6 text-sm font-bold font-bebas"></h4>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</main>
	);
}
