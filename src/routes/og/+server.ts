import { type RequestHandler } from '@sveltejs/kit';
import { ImageResponse } from '@ethercorps/sveltekit-og';

export const GET: RequestHandler = async ({ url }) => {
	const icon = url.searchParams.get('c') || 'https://ma.cyou/favicon.svg';
	const title = url.searchParams.get('y') || 'macyou';
	const description =
		url.searchParams.get('o') ||
		'This is my personal resume website, showcasing my skills, experience, and projects. It serves as a digital portfolio, providing a platform for others to learn more about my work as a developer and the journey I’ve taken. The website highlights various aspects of my career, technical expertise, and creative endeavors.';
	const website = url.searchParams.get('u') || 'https://ma.cyou/';

	const element = `
    <div tw="h-full w-full flex flex-col items-center justify-center bg-[#090A0B] text-center">
      <div tw="flex items-center justify-center bg-[#FFFFFF] p-4 w-full">
        <img tw="max-h-48 max-w-48 w-full m-4 rounded-full shadow-lg" src="${icon}" alt="Icon" />
				<div tw="flex flex-col items-start m-4 max-w-[75%]">
					<div tw="text-5xl text-[#09090b]">${title}</div>
					<div tw="text-2xl mt-4 text-[#75757A] text-left leading-relaxed">${description}</div>
				</div>
      </div>
			<div tw="text-xl mt-0 text-[#75757A] text-left leading-relaxed">${website}</div>
    </div>
  `.trim();

	return new ImageResponse(element, {}, { props: undefined, style: undefined });
};
