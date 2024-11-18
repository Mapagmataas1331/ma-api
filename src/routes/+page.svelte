<script lang="ts">
	import { Button } from '$shared/components/ui/button/index.js';
	import { language } from '$shared/stores/language';
</script>

<div
	class="mx-auto flex min-h-[calc(100dvh_-_3.5rem)] w-full flex-col items-center justify-center bg-gradient-to-br from-white to-sky-200 px-1 dark:from-sky-800 dark:to-black md:min-h-[calc(100dvh_-_4rem)]"
>
	<Button variant="outline" href="https://ma.cyou/" class="mb-4"
		>{$language === 'ru' ? 'Основной сайт автора' : "Author's main site"}</Button
	>
	<Button variant="outline" href="https://more.ma.cyou/og/"
		>{$language === 'ru' ? 'Создать OG картинку' : 'Create OG image'}</Button
	>
</div>
