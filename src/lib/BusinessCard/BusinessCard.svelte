<script lang="ts">
	import './style.scss';

	let speakerTexts = {
		short: `Hi, I'm Manuel Otto Santovenia, a Cloud Engineer at R+V. Outside of work, I'm fueled by passions for photography, design, building tiny software projects, learning, teaching and cycling. </br> 
		As I like to create things that bring a little joy to people's day, check out my other projects on <a href="https://github.com/lmaos-code">GitHub</a> 🚀.`,
		long: `'ello ello 👋🏾</br>
		I'm Manuel Otto Santovenia, a Cloud Engineer at R+V running Cloud Infrastructure on Azure. Beyond my work photography allows me to capture moments and see the world through a different lens, while my interest in design fuels a constant appreciation for aesthetics and user experience. I also love the challenge and satisfaction of building tiny software projects – bringing digital ideas to life, one small step at a time. </br>
		Learning is a continuous journey for me, and I'm currently in the process of completing my Master's degree. I also find great joy in sharing knowledge and helping others understand new concepts, whether it's teaching students or simply explaining a technical detail to a colleague. And when I need to clear my head and recharge, you'll likely find me out on my bike, exploring the world on two wheels.</br>
		Ultimately, my goal is to create things, whether it's robust cloud infrastructure or a simple piece of software, that can make people smile or make their lives a little bit better. If you want to see this for yourself, you can checkout my <a href="https://github.com/lmaos-code">GitHub Profile</a>.</br>
		Let’s chat 😊!`,
		speaker: `This is  Manuel Otto Santovenia! Manuel is a Cloud Engineer by profession, but his passions extend far beyond the world of cloud computing. He's a passionate photographer and you’ll find him tinkering with design and building fun, small software projects.
		</br>
		He’s is a lifelong learner, currently pursuing his Master's degree, and loves sharing his knowledge with others, whether in a teaching environment or a casual conversation. And when he's not immersed in technology or studies, he enjoys exploring the world on his bike.'`
	};

	function selectText(text: 'short' | 'long' | 'speaker') {
		currentText = speakerTexts[text];
	}
	$: currentText = speakerTexts.short;
</script>

<section class="BCard">
	<div id="header">
		<div>
			<h1>LMAOS</h1>
			<p>Software Engineer in Wiesbaden | Germany</p>
		</div>
		<img src="img/headshot.jpg" alt="Headshot of Manuel" />
	</div>
	<div id="contacts">
		<a href="https://github.com/lmaos-code"><img src="svg/github.svg" alt="Github Logo" /></a>
		<a href="https://instagram.com/manuel.png"
			><img src="svg/instagram.svg" alt="Instagram Logo" /></a
		>
		<a href="mailto:code@lmaos.de"><img src="svg/mail.svg" alt="Mail Link" /></a>
	</div>
	<div id="description">
		<div id="descButtons">
			<button on:click={() => selectText('short')}>short</button>
			<button on:click={() => selectText('long')}>long</button>
			<button on:click={() => selectText('speaker')}>speaker</button>
		</div>
		<div id="descriptionText">
			<p id="current">
				{@html currentText}
			</p>
		</div>
	</div>
</section>
