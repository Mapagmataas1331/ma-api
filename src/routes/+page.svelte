<script lang="ts">
	import { language } from '$shared/stores/language';
</script>

<div
	class="mx-auto flex min-h-[calc(100dvh_-_3.5rem)] w-full flex-col items-center justify-center bg-gradient-to-br from-white to-sky-200 px-1 dark:from-sky-800 dark:to-black md:min-h-[calc(100dvh_-_4rem)]"
>
	<h1 class="text-lg leading-7">
		{$language === 'ru' ? 'Api сайтов автора Mapagmataas' : "Mapagmataas' websites' api"}
	</h1>
</div>
