<script lang="ts">
	import * as Avatar from './ui/avatar/index.js';
	import * as HoverCard from './ui/hover-card';

	let clazz = '';
	export { clazz as class };
	export let link: string = 'https://ma.cyou';
	export let name: string = 'ma.cyou';
	export let img: string = 'https://github.com/ma-cyou.png';
	export let fallback: string = 'MA';
	export let title: string = 'macyou';
	export let description: string = "Mapagmataas's website";
</script>

<HoverCard.Root>
	<HoverCard.Trigger
		href={link}
		target="_blank"
		rel="noreferrer noopener"
		class="{clazz !== ''
			? clazz + ' '
			: ''}rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
	>
		{name}
	</HoverCard.Trigger>
	<HoverCard.Content class="w-80">
		<div class="flex space-x-4">
			<Avatar.Root class="my-auto h-12 w-12">
				<Avatar.Image src={img} />
				<Avatar.Fallback>{fallback}</Avatar.Fallback>
			</Avatar.Root>
			<div>
				<h4 class="text-sm font-semibold">{title}</h4>
				<p class="text-sm">{description}</p>
			</div>
		</div>
	</HoverCard.Content>
</HoverCard.Root>
