"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import TShirts from "@/app/assets/Carousel/T-Shirts.png";
import Xbox from "@/app/assets/Carousel/xbox.png";
import PC from "@/app/assets/Carousel/PC.png";
import Celular from "@/app/assets/Carousel/Celular.png";
import Cafetera from "@/app/assets/Carousel/Cafetera.png"

import Image from "next/image";

export function CarouselComponent() {
	const Imagenes = [
		{ id: "1", url: TShirts, name: "Camisas", price: "10$" },
		{ id: "2", url: Xbox, name: "xbox One", price: "190$" },
		{ id: "3", url: PC, name: "PC Intel® Core™ i7-1165G7", price: "500$" },
		{ id: "4", url: Celular, name: "Iphone 15", price: "450$" },
		{ id: "5", url: Cafetera, name: "Cafetera Oster", price: "120$" },
	];

	const plugin = React.useRef(Autoplay({ delay: 2500, stopOnInteraction: true }));

	return (
		<Carousel
			plugins={[plugin.current]}
			className="w-32 xl:w-64"
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}
		>
			<CarouselContent>
				{Imagenes.map((_, index) => (
					<CarouselItem key={index}>
						<div className="p-1">
							<Card>
								<h2 className="p-10 text-lg 2xl:text-6xl font-bold font-bebas">{Imagenes[index]["name"]}</h2>
								<CardContent className="flex aspect-square items-center justify-center p-6">
									<div>
										<Image src={Imagenes[index]["url"]} alt="" height={500} />
									</div>
								</CardContent>

								<h2 className="p-6 text-2xl font-bold font-bebas">{Imagenes[index]["price"]}</h2>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
      <CarouselNext/>
      <CarouselPrevious/>
		</Carousel>
	);
}
