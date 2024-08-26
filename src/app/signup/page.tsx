"use client";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";

export default function SiginPage() {
	const router = useRouter();

	return (
		<section className="flex flex-col sm:flex-row bg-slate-100">
			<div className="flex w-100 p-12 min-h-screen lg:p-24 2xl:p-32 dark:bg-neutral-700 items-center justify-center w-full">
				<div>
					<div className="flex justify-center p-5 text-6xl font-bebas font-bold">
						<h1>Templade</h1>
					</div>
					<div className="flex justify-center self-center items-center content-center">
						<Card className="flex flex-col justify-center gap-5 p-4 w-[350px] lg:w-[480px] h-auto dark:bg-neutral-600 self-center bg-neutral-100">
							<div className="flex justify-center">
								<h2 className="font-bebas font-bold text-3xl">Time to Join Us!</h2>
							</div>
							<form>
								<div className="flex flex-col gap-5">
									<div className="flex gap-5">
										<Input type="text" placeholder="Name" className="font-bebas text-lg h-10" />
										<Input type="text" placeholder="Lastname" className="font-bebas text-lg h-10" />
									</div>
									<div className="flex flex-col gap-5">
										<Input type="text" placeholder="Username" className="font-bebas text-lg h-10" />
										<Input type="mail" placeholder="Email" className="font-bebas text-lg h-10" />
									</div>
									<div className="flex gap-5">
										<Input
											type="password"
											placeholder="Password"
											className=" font-bebas text-lg h-10"
										/>
										<Input
											type="password"
											placeholder="Repeat Password"
											className=" font-bebas text-lg h-10"
										/>
									</div>
								</div>
							</form>

							<div className="flex justify-center flex-col gap-2 items-center">
								<Button
									className="font-ubuntu h-10 w-[268px] justify-self-center text-sm"
									type="submit"
								>
									Register Now!
								</Button>
							</div>
							<Separator />
							<CardFooter className="flex justify-center flex-col gap-3">
								<div className="flex justify-center items-center flex-col gap-1 font-ubuntu text-2sm text-gray-500 dark:text-white">
									<p className="font-bold text-3sm">or</p>
									<p>Continue with</p>
								</div>
								<Button
									className="font-ubuntu flex gap-2 h-10 w-[268px] self-center font-semibold text-sm bg-neutral-100 text-black hover:bg-neutral-200"
									type="submit"
								>
									<FcGoogle size={21} /> Google
								</Button>
								<Button
									className="font-ubuntu h-10 w-[268px] flex gap-2 self-center font-semibold text-sm bg-blue-500 text-white hover:bg-blue-600"
									type="submit"
								>
									<FaFacebook size={21} />
									Facebook
								</Button>
							</CardFooter>
							<p className="font-ubuntu text-2sm text-gray-600 dark:text-white">
								Already have an account?{" "}
								<a href="/login" className="font-bold hover:underline">
									Log in!
								</a>
							</p>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
