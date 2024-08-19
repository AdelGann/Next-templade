import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type CardProps = React.ComponentProps<typeof Card> & {
	title: string;
	description?: string;
    style?: string;
	content: any;
	footer?: string;
};

export const CardComponent = ({
	className,
	title,
    style, // styles tailwind
	description,
	content,
	footer,
	...props
}: CardProps) => {
	return (
		<Card className={cn(`${style}`, className)} {...props}>
			<CardHeader>
				<CardTitle className="text-3xl font-bebas">{title}</CardTitle>
				{description && <CardDescription>{description}</CardDescription>}
			</CardHeader>
			<CardContent>
				<p>{content}</p>
			</CardContent>
			{footer && (
				<CardFooter>
					<p>{footer}</p>
				</CardFooter>
			)}
		</Card>
	);
};
