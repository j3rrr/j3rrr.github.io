import React from 'react'
//import {Link} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import aboutStyles from './about.module.scss'

const RecruitPage = () => {
    return (
		<Layout>
		<Head title="Die Gilde" />
		<div className={aboutStyles.aboutWrapper}>
			<div  className={aboutStyles.aboutContent}>
				
				<h2>Wen rekrutieren wir?</h2>
				<p>
					Generell ist bei uns jeder willkommen, der sich aktiv in das Gildenleben (Mythic+, PvP, Questen, etc) einbringen möchte und Wert auf eine erwachsene, familiäre Community legt.<br></br><br></br>
					
					Neben unserem Mainraid, bieten wir weitere Möglichkeiten, regelmäßg etwas mit der gesamten Gilde zu unternehmen.<br></br>  
					Dazu gehören zum Beispiel spontane M+ Gruppen, Erfolgsruns und unser wöchtentlicher HC-Raid, an dem jeder freiwillig teilnehmen kann. Hierfür setzen wir nur vorraus, dass die Charaktere dem jeweiligen Content entsprechen ausgerüstet sind.
					
					<br></br><br></br>
					Für Spieler, die sich unserem Mythic-Raid anschließen wollen, gelten zusätzliche Vorraussetzungen.
				</p>

				<h2>Kontakt</h2>
				<p>
					Egal, ob als einfaches Gildenmitglied oder als Raider - sollten wir dein Interesse geweckt haben und du möchtest mit uns Kontakt aufnehmen, sind dies deine Ansprechpartner
				</p>
				<div className={aboutStyles.contact}>
					{/* <div className={aboutStyles.contactTitle}>
						<h4>Battle.Net</h4>
					</div> */}
					<div className={`${aboutStyles.contactBox} ${aboutStyles.left}`}>
						<div className={aboutStyles.contactSubtitleGuild}>Gildenleiterin</div>
						<div className={aboutStyles.contactId}>Rala#2964</div>
					</div>
					<div className={`${aboutStyles.contactBox} ${aboutStyles.right}`}>
						<div className={aboutStyles.contactSubtitleRaid}>Raidleiter</div>
						<div className={aboutStyles.contactId}>Bambule#21598</div>
					</div>
				</div>
				{/* 
				<h4>Battle.Net</h4>
				<ul>
					<li>Gildenleiterin: Rala#2964</li>
					<li>Raidleiter: Bambule#21598</li>
				</ul> */}
				

				<h2>Gilde</h2>
				<p>
					Wenn du einfach nur eine nette Gemeinschaft ohne irgendwelche Verpflichtungen suchst, gibt es nicht viel zu sagen, außer: melde dich!<br></br>
					Natürlich möchten wir dich erst einmal etwas kennenlernen, wenn du aber menschlich zu uns passt, steht deinem Weg zur Null eigentlich nichts weiter im Wege.
				</p>

				<h2>Mythic Raidkader</h2>				
				<h3>Raidzeiten</h3>
					<ul>
						<li>Mittwoch: 19:15 bis 22:30 Uhr</li>
						<li>Sonntag: 19:15 bis 22:30 Uhr</li>
					</ul>
				<p>					
					Wir schätzen unsere familiäre und trotzdem progress-orientierte Raidatmosphäre sehr. Um diese auch weiterhin aufrecht zu erhalten, legen wir viel Wert auf ein respektvolles und faires Miteinander.<br></br>
					Jeder, der sich dazu entscheidet am Raid teilzunehmen, soll auch die Möglichkeit dazu bekommen.<br></br>
					Fehler werden bei uns nicht unmittelbar bestraft und Fragen bei Unsicherheiten sind absolut erwünscht!<br></br>
					Trotzdem sollte sich jeder im Klaren darüber sein, dass es gewisse Regeln und Pflichten gibt, die für jeden gleich gelten.	
				</p>
				<p>
					Um unseren Mythic-Raid so erfolgreich wie möglich zu gestalten, erwarten wir, dass sich jeder Raider selbstständig um die Charakterpflege kümmert und sich so gut es geht auf die anstehenden Bosse vorbereitet.
				</p>
				<p>
					Zur Charakterpflege zählen wöchentliche / tägliche Dinge (Worldquest, Ruf, usw) und Aufgaben, die für den persönlichen Charakterprogress wichtig sind (Essenzen, Azerit, hergestellte Legendarys, Soulbinds, usw).<br></br>
					Außerdem erwarten wir, dass jeder ausreichend Buff-Food, Pots, etc zum Raidbeginn mitbringt.</p>
				<p>
					Auch wenn die Raidleitung Taktiken usw vorbereitet, sollte sich jeder Raider eigenständig über die Bosse und klassenspezifische Besonderheiten informieren.
				</p>
				<p>
					Jeder Raider hat dafür zu sorgen, dass er die Einladungen im Ingame-Kalender beantwortet und pünktlich zu den Raids erscheint.
					Sollte mal etwas unvorhergesehen dazwischen kommen, kann dies im Discord mitgeteilt werden.
				</p>
				<p>
					Um unnötige Wartezeiten während des Raids zu vermeiden, sollten längere Diskussionen auf die Pausen verlegt, oder die Raidleitung per Whisper-Nachricht informiert werden.<br></br>
					Dinge wie das Vorbereiten von Mahlzeiten, längere Spaziergänge mit dem Hund usw. sollten selbstverständlich vor Raidbeginn erledigt sein.
				</p>
				<p>
					Wenn all das für dich selbstverständlich ist und du der Meinung bist, unseren Raidkader bereichern zu können, dann schreib uns einfach an, damit wir uns in einem kurzen Gespräch im Discord kennenlernen und ein Bild voneinander machen können.
				</p>
				
			</div>
			
				
		</div>
	</Layout>
	)
}

export default RecruitPage

