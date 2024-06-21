
'use client';

import './page.css';

import Image from 'next/image';

import webPageIcon from '../../Pictures/WebPageIcon.png';

import astra from '../../Pictures/astra.png';
import breach from '../../Pictures/breach.png';
import killjoy from '../../Pictures/killjoy.png';
import jett from '../../Pictures/jett.png';
import kayo from '../../Pictures/kayo.png';
import sova from '../../Pictures/sova.png';

export default function Home() {

    var previousScrollValue = 0;
    var currentScrollValue;

    if(typeof window !== 'undefined'){    
        window.addEventListener('scroll', () => {
            currentScrollValue = window.pageYOffset;

            const navbar = document.getElementById('navbar');

            if(currentScrollValue > previousScrollValue) {
                navbar.style.top = '-10%';
            }
            else if(currentScrollValue < previousScrollValue) {
                navbar.style.top = '0';
            }

            previousScrollValue = currentScrollValue;
        });
    }

    return (
        <div id="whole-page">
            <div id="navbar">
                <Image id='web-page-icon' src={webPageIcon}/>
            </div>

            <div id="description-box">
                <Image class='agent-images' id='jett' src={jett} />
                <div class='description-inside-box' id="jett-description"><h1>Jett</h1>Jett, the agile duelist from South Korea, dominates the battlefield with unrivaled speed and precision. Her mastery of the winds allows her to swiftly navigate through enemy lines, creating chaos and turning the tide of battle with her swift strikes and deadly accuracy. Armed with throwing knives and an array of tactical maneuvers, Jett excels in aggressive, high-risk engagements, making her a formidable opponent in every encounter.</div>
                
                <Image class='agent-images' id='astra' src={astra} />
                <div class='description-inside-box' id="astra-description"><h1>Astra</h1>Astra, the cosmic controller, harnesses the cosmos to reshape the battlefield. Originating from Ghana, she wields the power of stars to manipulate gravity and disrupt enemy movements. A master of astral forms, Astra deploys Nova Pulse to concuss enemies and Nebula to create smokescreens. Her ability to summon Gravity Well pulls foes into collapse, while her Cosmic Divide splits the map with an astral wall.</div>
                
                <Image class='agent-images' id='sova' src={sova} />
                <div class='description-inside-box' id="sova-description"><h1>Sova</h1>Sova, the sentinel of the forest, utilizes reconnaissance and precision to track down enemies. Hailing from Russia, he deploys a bow equipped with a variety of specialized arrows to reveal enemy locations. Sova's abilities include Recon Bolt, which reveals nearby enemies, Owl Drone for scouting ahead, and Shock Bolt for dealing area damage. His ultimate, Hunter's Fury, fires devastating energy blasts through walls, making him an invaluable asset in gathering intelligence and eliminating threats from afar.</div>
                
                <Image class='agent-images' id='killjoy' src={killjoy} />
                <div class='description-inside-box' id="killjoy-description"><h1>Killjoy</h1>Killjoy, the German genius, secures the battlefield with her arsenal of automated defenses. Using her intellect and cutting-edge technology, Killjoy deploys Alarmbots to detect enemies and Nanoswarms to inflict damage in designated areas. Her Turret provides constant surveillance and harassment, while her Lockdown ultimate immobilizes enemies caught in its radius. With a knack for strategic control and protection, Killjoy is adept at holding positions and disrupting enemy advances in Valorant.</div>
                
                <Image class='agent-images' id='kayo' src={kayo} />
                <div class='description-inside-box' id="kayo-description"><h1>KAY/O</h1>KAY/O, the resilient Initiator, brings unmatched combat utility to the battlefield. As a sentient machine designed for suppression and aggressive play, KAY/O neutralizes enemy abilities with his FRAG/ment utility, disrupts their tactics with FLASH/drive, and shuts down enemy agents with his NULL/cmd ultimate. Built for frontline engagements, KAY/O's determination and resilience make him a formidable force in countering opponent strategies and dominating key areas in Valorant.</div>
                
                <Image class='agent-images' id='breach' src={breach} />
                <div class='description-inside-box' id="breach-description"><h1>Breach</h1>Breach, the seismic disruptor, specializes in breaching enemy lines with powerful area-of-effect abilities. Hailing from Sweden, Breach utilizes seismic blasts to disrupt and damage foes through walls and obstacles. His abilities include Flashpoint for blinding enemies, Aftershock for unleashing controlled seismic tremors, and Fault Line for creating a concussive blast that disorients opponents. His ultimate, Rolling Thunder, sends a devastating cascading quake that stuns and damages enemies in its path, making Breach a cornerstone of offensive pushes and area denial in Valorant.</div>
            </div>

            <div id="footer">This website is created by Akhilendra Ojha. For further inquiries, please contact via email at: <p>contactakhilendraojha@gmail.com</p></div>
        </div>
    );
}
