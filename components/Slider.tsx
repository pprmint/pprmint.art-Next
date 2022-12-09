import * as SliderPrimitive from "@radix-ui/react-slider";

export default function Slider(props: {
    label: string;
	min: number;
    default: number[];
	max: number;
	step: number;
}) {
	return (
		<SliderPrimitive.Root
			className="group relative flex items-center select-none touch-none w-full rounded-full"
            min={props.min}
			defaultValue={props.default}
			max={props.max}
			step={props.step}
			aria-label={props.label}
		>
			<SliderPrimitive.Track className="relative duration-200 ease-out bg-green-dark3 flex-grow h-1 group-hover:h-3 rounded-full">
				<SliderPrimitive.Range className="absolute top-1/2 -translate-y-1/2 bg-gradient-to-r from-green to-green group-hover:to-green-dark2 h-3 rounded-full group-hover:rounded-l-full" />
			</SliderPrimitive.Track>
			<SliderPrimitive.Thumb className="block duration-100 h-0 group-hover:h-5 w-0 group-hover:w-5 bg-green rounded-full outline-none" />
		</SliderPrimitive.Root>
	);
}
