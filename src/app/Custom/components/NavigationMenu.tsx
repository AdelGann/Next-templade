"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ToggleTheme";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SearchIcon } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
	{
		title: "Template For Shopping",
		href: "/shopping",
		description: "Div into our shops and found interesting items for you <3",
	},
	{
		title: "Templade For Sellers",
		href: "/templade4Sellers",
		description: "Need to sell anything? you found the right place.",
	},
	{
		title: "About us",
		href: "/aboutus",
		description:
			"See more about us and our vision.",
	},
	{
		title: "Contact",
		href: "/contact",
		description: "Do you wanna contact us? try looking this page.",
	},
	{
		title: "Contact Developer",
		href: "/contact/developer",
		description:
			"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
	},
];

export function NavMenu() {
	return (
		<div className="flex justify-between">
			<NavigationMenu className=" w-full">
				<Link href={"/"}>
					<h1 className="font-bebas p-3 hover:cursor-pointer">Templade</h1>
				</Link>
				<NavigationMenuList className={"flex"}>
					<NavigationMenuItem>
						<NavigationMenuTrigger className="font-bebas text-2sm">MENU</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
								{components.map((component) => (
									<ListItem key={component.title} title={component.title} href={component.href}>
										{component.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<NavigationMenu className="p-2">
				<NavigationMenuList className={"flex"}>
					<NavigationMenuItem className="font-bebas">
						<Link href="/Login" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Log In
							</NavigationMenuLink>
						</Link>
						<Link href="/Signup" legacyBehavior passHref>
							<NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
								Sign Up
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<ModeToggle />
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
	({ className, title, children, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<a
						ref={ref}
						className={cn(
							"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
							className
						)}
						{...props}
					>
						<div className="text-sm font-medium leading-none">{title}</div>
						<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
					</a>
				</NavigationMenuLink>
			</li>
		);
	}
);
ListItem.displayName = "ListItem";
