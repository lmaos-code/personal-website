<script lang="ts">
	let speakerTexts = {
		short: `Hi, I'm Manuel Otto Santovenia, a Cloud Engineer at R+V.<br>Outside of work, I'm fueled by passions for photography, design, building tiny software projects, learning, teaching and cycling. </br> 
		As I like to create things that bring a little joy to people's day, check out my other projects on <a href="https://github.com/lmaos-code">GitHub</a> 🚀.`,
		long: `'ello ello 👋🏾 <br>
		I'm Manuel Otto Santovenia, a Cloud Engineer at R+V running Cloud Infrastructure on Azure. Beyond my work photography allows me to capture moments and see the world through a different lens, while my interest in design fuels a constant appreciation for aesthetics and user experience. I also love the challenge and satisfaction of building tiny software projects – bringing digital ideas to life, one small step at a time. </br>
		Learning is a continuous journey for me, and I'm currently in the process of completing my Master's degree. I also find great joy in sharing knowledge and helping others understand new concepts, whether it's teaching students or simply explaining a technical detail to a colleague. And when I need to clear my head and recharge, you'll likely find me out on my bike, exploring the world on two wheels.</br>
		Ultimately, my goal is to create things, whether it's robust cloud infrastructure or a simple piece of software, that can make people smile or make their lives a little bit better. If you want to see this for yourself, you can checkout my <a href="https://github.com/lmaos-code">GitHub Profile</a>.</br>
		Let’s chat 😊!`,
		speaker: `This is  Manuel Otto Santovenia! Manuel is a Cloud Engineer by profession, but his passions extend far beyond the world of cloud computing. He's a passionate photographer and you’ll find him tinkering with design and building fun, small software projects.
		<br>
		He’s is a lifelong learner, currently pursuing his Master's degree, and loves sharing his knowledge with others, whether in a teaching environment or a casual conversation. And when he's not immersed in technology or studies, he enjoys exploring the world on his bike.`
	};

	function selectText(text: 'short' | 'long' | 'speaker') {
		currentText = speakerTexts[text];
	}
	let currentText = $state(speakerTexts.short);
</script>

<section
	id="BCard"
	class="flex flex-col w-[90%] max-w-5xl ml-auto mr-auto mt-[1.5rem] mb-[1.5rem] bg-[var(--color-primary-container)] box-border rounded-4xl"
>
	<div
		id="header"
		class="flex flex-col items-center box-border rounded-4xl w-[90%] mx-[auto] pb-[2rem] mt md:py-[2em] md:flex-row md:justify-around"
	>
		<div>
			<h1 class="text-center my-[0.5em] md:text-left">LMAOS</h1>
			<p>Software Engineer in Wiesbaden | Germany</p>
		</div>
		<img
			src="img/headshot.jpg"
			alt="Headshot of Manuel"
			class="size-[200px] aspect-square rounded-full"
		/>
	</div>

	<div
		id="contacts"
		class="h-[3em] flex flex-row justify-evenly items-center w-full box-border py-[2em] [&>a]:size-[2.5em] [&>a]:aspect-square"
	>
		<a href="https://github.com/lmaos-code"><img src="svg/github.svg" alt="Github Logo" /></a>
		<a href="https://instagram.com/manuel.png"
			><img src="svg/instagram.svg" alt="Instagram Logo" /></a
		>
		<a href="mailto:code@lmaos.de"><img src="svg/mail.svg" alt="E-Mail Logo" /></a>
	</div>
	<div class="mx-auto w-[80%] pt-4">
		<a href="garden" class="hover:!no-underline">
			<div
				class="justify-between md:justify-evenly w-full flex flex-row bg-[#5f895d25] rounded-2xl min-h-[3em] p-3 pr-5 items-center"
			>
				<div>
					<h2>Sometimes, I like to do some digital gardening</h2>
					<p class="!mt-0 !mb-0.5">come explore what I've been thinking about and cultivating</p>
				</div>
				<div
					class="size-13 items-center justify-center flex shrink-0 bg-[theme(--color-accent)] rounded-full"
				>
					<img src="svg/garden_white.svg" alt="flower" class="size-8" />
				</div>
			</div>
		</a>
	</div>
	<div
		id="description"
		class="pt-[2em] w-full [&>div]:flex [&>div]:flex-row [&>div]:justify-evenly [&>div]:gap-[1em] [&>div]:w-[80%] [&>div]:m-[auto] [&>div]:flex-wrap md:py-[2em] md:[&>#descButtons]:w-[80%] md:[&>#descButtons]:justify-start"
	>
		<div id="descButtons">
			<button onclick={() => selectText('short')}>short</button>
			<button onclick={() => selectText('long')}>long</button>
			<button onclick={() => selectText('speaker')}>speaker</button>
		</div>
		<div id="descriptionText">
			<p id="current" class="my-[16px]">
				{@html currentText}
			</p>
		</div>
	</div>
</section>
