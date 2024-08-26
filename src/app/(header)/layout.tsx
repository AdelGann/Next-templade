import { Fragment } from "react";
import { NavMenu } from "../Custom/NavigationMenu";

export default function LoginLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Fragment>
			<NavMenu />
			<main>{children}</main>
			<footer className="py-5 px-10 flex bottom-0 right-0 relative justify-between items-center">
				<p className="absolute">Developed By Adel Gannem ©</p>
			</footer>
		</Fragment>
	);
}
