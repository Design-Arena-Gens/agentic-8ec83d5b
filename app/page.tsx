'use client';

import { useEffect, useRef } from 'react';
import styles from './page.module.css';

export default function Home() {
  const lightsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create animated Christmas lights
    if (lightsRef.current) {
      const container = lightsRef.current;
      const numLights = 40;

      for (let i = 0; i < numLights; i++) {
        const light = document.createElement('div');
        light.className = styles.light;
        light.style.left = `${(i / numLights) * 100}%`;
        light.style.animationDelay = `${Math.random() * 2}s`;

        // Random colors: warm gold, soft white, champagne
        const colors = ['#FFD700', '#FFF8DC', '#F5DEB3', '#FFFACD'];
        light.style.background = colors[Math.floor(Math.random() * colors.length)];

        container.appendChild(light);
      }
    }
  }, []);

  return (
    <div className={styles.container}>
      {/* Header with animated lights */}
      <header className={styles.header}>
        <div className={styles.lightsContainer} ref={lightsRef}>
          <div className={styles.wire}></div>
        </div>
        <h1 className={styles.logo}>BIG CHRISTMAS TREE</h1>
      </header>

      {/* Main content with the Christmas tree */}
      <main className={styles.main}>
        <div className={styles.treeContainer}>
          <svg viewBox="0 0 400 600" className={styles.tree}>
            {/* Tree shadow for depth */}
            <ellipse cx="200" cy="580" rx="120" ry="20" fill="rgba(0,0,0,0.3)" />

            {/* Tree trunk */}
            <rect x="175" y="480" width="50" height="100" fill="#3D2817" />
            <rect x="177" y="480" width="46" height="100" fill="#4A3219" />

            {/* Tree sections - creating realistic pine shape */}
            {/* Bottom section */}
            <path d="M 200 480 L 80 480 L 100 420 L 85 420 L 200 280 L 315 420 L 300 420 L 320 480 Z"
                  fill="#1a4d2e" stroke="#163d25" strokeWidth="1"/>

            {/* Middle section */}
            <path d="M 200 320 L 95 380 L 110 340 L 95 340 L 200 220 L 305 340 L 290 340 L 305 380 Z"
                  fill="#1f5a35" stroke="#1a4d2e" strokeWidth="1"/>

            {/* Top section */}
            <path d="M 200 260 L 110 300 L 125 270 L 110 270 L 200 160 L 290 270 L 275 270 L 290 300 Z"
                  fill="#25643c" stroke="#1f5a35" strokeWidth="1"/>

            {/* Tree topper - gold star */}
            <path d="M 200 140 L 205 155 L 220 157 L 208 167 L 212 182 L 200 174 L 188 182 L 192 167 L 180 157 L 195 155 Z"
                  fill="#FFD700" stroke="#FFA500" strokeWidth="1.5">
              <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite"/>
            </path>

            {/* Ornaments - gold, red, and white baubles */}
            {/* Bottom section ornaments */}
            <circle cx="150" cy="440" r="8" fill="#C41E3A" className={styles.ornament}>
              <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="250" cy="445" r="7" fill="#FFD700" className={styles.ornament}>
              <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="180" cy="410" r="6" fill="#FFFFFF" className={styles.ornament}>
              <animate attributeName="opacity" values="0.7;1;0.7" dur="2.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="220" cy="415" r="7" fill="#C41E3A" className={styles.ornament}>
              <animate attributeName="opacity" values="0.8;1;0.8" dur="3.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="200" cy="460" r="6" fill="#FFD700" className={styles.ornament}>
              <animate attributeName="opacity" values="0.8;1;0.8" dur="2.7s" repeatCount="indefinite"/>
            </circle>

            {/* Middle section ornaments */}
            <circle cx="140" cy="340" r="7" fill="#FFFFFF" className={styles.ornament}>
              <animate attributeName="opacity" values="0.7;1;0.7" dur="3.1s" repeatCount="indefinite"/>
            </circle>
            <circle cx="260" cy="345" r="8" fill="#C41E3A" className={styles.ornament}>
              <animate attributeName="opacity" values="0.8;1;0.8" dur="2.6s" repeatCount="indefinite"/>
            </circle>
            <circle cx="190" cy="310" r="6" fill="#FFD700" className={styles.ornament}>
              <animate attributeName="opacity" values="0.8;1;0.8" dur="2.9s" repeatCount="indefinite"/>
            </circle>
            <circle cx="230" cy="315" r="7" fill="#FFFFFF" className={styles.ornament}>
              <animate attributeName="opacity" values="0.7;1;0.7" dur="3.3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="170" cy="360" r="6" fill="#C41E3A" className={styles.ornament}>
              <animate attributeName="opacity" values="0.8;1;0.8" dur="2.4s" repeatCount="indefinite"/>
            </circle>

            {/* Top section ornaments */}
            <circle cx="160" cy="260" r="6" fill="#FFD700" className={styles.ornament}>
              <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="240" cy="265" r="7" fill="#FFFFFF" className={styles.ornament}>
              <animate attributeName="opacity" values="0.7;1;0.7" dur="2.7s" repeatCount="indefinite"/>
            </circle>
            <circle cx="200" cy="240" r="6" fill="#C41E3A" className={styles.ornament}>
              <animate attributeName="opacity" values="0.8;1;0.8" dur="2.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="180" cy="280" r="5" fill="#FFD700" className={styles.ornament}>
              <animate attributeName="opacity" values="0.8;1;0.8" dur="3.1s" repeatCount="indefinite"/>
            </circle>
            <circle cx="220" cy="285" r="6" fill="#FFFFFF" className={styles.ornament}>
              <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite"/>
            </circle>

            {/* Twinkling lights on tree */}
            <circle cx="135" cy="470" r="3" fill="#FFD700" className={styles.treeLight}>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="265" cy="475" r="3" fill="#FFF8DC" className={styles.treeLight}>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="155" cy="395" r="3" fill="#FFD700" className={styles.treeLight}>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" repeatCount="indefinite"/>
            </circle>
            <circle cx="245" cy="400" r="3" fill="#FFF8DC" className={styles.treeLight}>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="125" cy="315" r="3" fill="#FFD700" className={styles.treeLight}>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.7s" repeatCount="indefinite"/>
            </circle>
            <circle cx="275" cy="320" r="3" fill="#FFF8DC" className={styles.treeLight}>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.9s" repeatCount="indefinite"/>
            </circle>
            <circle cx="145" cy="230" r="3" fill="#FFD700" className={styles.treeLight}>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="255" cy="235" r="3" fill="#FFF8DC" className={styles.treeLight}>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
            </circle>

            {/* More scattered lights */}
            <circle cx="210" cy="430" r="2.5" fill="#FFD700" className={styles.treeLight}>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" repeatCount="indefinite"/>
            </circle>
            <circle cx="165" cy="335" r="2.5" fill="#FFF8DC" className={styles.treeLight}>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.7s" repeatCount="indefinite"/>
            </circle>
            <circle cx="235" cy="340" r="2.5" fill="#FFD700" className={styles.treeLight}>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="195" cy="195" r="2.5" fill="#FFF8DC" className={styles.treeLight}>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>
      </main>
    </div>
  );
}
