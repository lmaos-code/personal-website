<script lang="ts">
	import './style.scss';

	let speakerTexts = {
		short: `Hey there! I'm Manuel Otto Santovenia, a Junior Cloud Engineer at R+V. Passionate about AI, ML, photography, software development, motorcycle rides, and sim racing. Check out my projects on <a href="https://github.com/lmaos-code">GitHub</a>. <br/>Let's chat and share our interests!`,
		long: `Hello Hello! I'm Manuel Otto Santovenia, a Junior Cloud Engineer at R+V in Wiesbaden. I find myself constantly fascinated by the world of AI & ML, and I'm always on the lookout for new ways to leverage these technologies to solve complex problems. Whether it's exploring cutting-edge algorithms or tinkering with neural networks, I'm always eager to dive deep into the realm of artificial intelligence.<br/>
	In addition to my AI endeavors, I'm also passionate about photography. There's something magical about freezing a moment in time and capturing its essence through the lens. Whenever I have spare time, you'll often find me out and about, camera in hand, seeking the perfect shot.<br/>
	When I'm not immersed in code or framing the world through my camera, I channel my technical skills into managing my Kubernetes homelab. It's like having my own miniature data center, where I can experiment with various deployments and configurations. The challenges of orchestrating containerized applications in a distributed environment truly excite me.<br/>
	But it's not all work and no play for me! I have a need for speed, both on and off the digital track. Riding my motorcycle provides an exhilarating escape, where I can feel the wind in my face and experience the thrill of the open road. And when I'm not zipping through the streets, I satisfy my racing cravings through sim racing. Competing against others in virtual races allows me to push the limits of my driving skills and experience the adrenaline rush from the comfort of my own home.<br/>
	If you're ever interested in discussing any of these topics or need some tech advice, don't hesitate to reach out. I'm always excited to connect with fellow enthusiasts and share knowledge.
	Also, if you are interrested, check out my code on <a href="https://github.com/lmaos-code">GitHub</a>!`,
		speaker: ''
	};

	function selectText(text: 'short' | 'long' /*| 'speaker'*/) {
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
		<a href="https://twitter.com/manuel_txt"><img src="svg/twitter.svg" alt="Twitter Logo" /></a>
		<a href="https://www.linkedin.com/in/lmaos/"
			><img src="svg/linkedin.svg" alt="LinkedIn Logo" /></a
		>
		<a href="mailto:code@lmaos.de"><img src="svg/mail.svg" alt="Mail Link" /></a>
	</div>
	<div id="description">
		<div id="descButtons">
			<button on:click={() => selectText('short')}>short</button>
			<button on:click={() => selectText('long')}>long</button>
			<!--<button on:click={()=>selectText('speaker')}>speaker</button>-->
		</div>
		<div id="descriptionText">
			<p id="current">
				{@html currentText}
			</p>
		</div>
	</div>
</section>
