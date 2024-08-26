import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { ArrowRight, Search } from "lucide-react";

import Image from "next/image";

import xbox from "@/app/assets/Items/xbox-x.png";
import iphone from "@/app/assets/Items/Iphone-15.png";
import SmartTv from "@/app/assets/Items/SmartTv.png";
import PlayStationV from "@/app/assets/Items/PlayStationV.png";
import nintendo from "@/app/assets/Items/switch.png";
import Samsung from "@/app/assets/Items/Samsung.png";
export default function Home() {
	return (
		<main className="flex sm:flex-row flex-col">
			<div className="px-4 sm:px-16 items-center content-center flex-col p-6 lg:p-12 flex gap-5 justify-center  bg-[url('/bg.jpg')] flex justify-center bg-no-repeat bg-cover bg-center bg-fixed bg-blend-multiply bg-slate-500 dark:bg-slate-700 w-full min-h-screen min-h-screen-100%">
				<div>
					<h1 className="text-8xl text-white font-bebas font-bold">Templade</h1>
				</div>
				<div className="w-full flex gap-5 ">
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
					<div className="flex justify-between font-bebas flex-wrap">
						<h1 className=" text-4xl font-bold m-2">Latest products available</h1>
						<h5 className="flex hover:underline hover:cursor-pointer">
							<a href="" className="">
								View More
							</a>
							<ArrowRight size={20} />
						</h5>
					</div>
					<div className="flex justify-center gap-4 w-full p-4 flex-wrap">
						{products.map((_, index) => (
							<Card key={products[index]["id"]} className="flex flex-col w-auto">
								<CardTitle className="text-xl text-bebas w-56 font-bold p-3">
									<div className="flex gap-5">
										<h3>{products[index]["productName"]}</h3>
									</div>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										{products[index]["price"]}
									</p>
								</CardTitle>
								<CardContent className="flex items-center justify-center self-center">
									<Image src={products[index]["product"]} alt="" width={150} height={100} />
								</CardContent>
								<Separator />
								<CardFooter className="flex">
									<div className="flex gap-5 pt-2 items-center justify-center self-center">
										<Avatar className="flex items-center justify-center self-center">
											<AvatarImage
												src={products[index]["profile"] !== "" ? products[index]["profile"] : ""}
											/>
											<AvatarFallback>User</AvatarFallback>
										</Avatar>
										<h3 className="font-ubuntu text-sm-">{products[index]["userName"]}</h3>
									</div>
								</CardFooter>
							</Card>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
const products = [
	{
		id: "1",
		userName: "Johan Tua",
		profile: "",
		product: PlayStationV,
		productName: "PlayStation®5",
		productDescription: "test",
		productType: "Console / Entertaiment",
		price: "$599.99",
	},
	{
		id: "2",
		userName: "Alex Rivas",
		profile: "https://xsgames.co/randomusers/assets/avatars/male/6.jpg",
		product: iphone,
		productName: "Iphone 15",
		productDescription: "",
		productType: "Phone",
		price: "$799.99",
	},
	{
		id: "3",
		userName: "Mike E.",
		profile: "https://xsgames.co/randomusers/assets/avatars/male/40.jpg",
		product: SmartTv,
		productName: 'Samsung "83 Smart TV (2024)',
		productDescription: "",
		productType: "Entertaiment",
		price: "$799.99",
	},
	{
		id: "4",
		userName: "Adel Gannem",
		profile: "https://adelgann.vercel.app/profile.jfif",
		product: xbox,
		productName: "XBOX SERIES X",
		productDescription: "",
		productType: "Console / Entertaiment",
		price: "$449.99",
	},
	{
		id: "5",
		userName: "Joe Doe",
		profile:
			"https://blog.texasbar.com/files/2011/12/housto-bankruptcy-attorney-adam-schachter1.jpg",
		product: Samsung,
		productName: "Samsung Galaxy S21",
		productDescription: "",
		productType: "Console / Entertaiment",
		price: "$449.99",
	},
	{
		id: "6",
		userName: "Angela R.",
		profile:
			"https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/96295477_713002156114333_7467102356958609408_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=YFkI_F4CZe8Q7kNvgEzI7HI&_nc_ht=scontent-mia3-1.xx&oh=00_AYBaaTOjZJHnBy7vPxwW_P9PVu3BJsIWDz3yPbLvly3V4A&oe=66F23A21",
		product: nintendo,
		productName: "Nintentdo Switch",
		productDescription: "",
		productType: "Console / Entertaiment",
		price: "$299.99",
	},
];
