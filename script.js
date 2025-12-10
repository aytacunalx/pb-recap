// ==========================================
// 1. DATA
// ==========================================
const rawData = {
    totalKills: 12415774,
    totalDeaths: 9415774,
    totalMatches: 5417157,
    totalWins: 2054309,
    totalHeadshots: 6456202,
    assaultKills: 1231560
};

const calculateKD = (k, d) => (k / d).toFixed(1);
const calculateWinRate = (w, m) => ((w / m) * 100).toFixed(0) + '%';
const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num;
};

const userData = {
    username: "OPERATÖR",
    generalStats: {
        matches: formatNumber(rawData.totalMatches),
        winRate: calculateWinRate(rawData.totalWins, rawData.totalMatches),
        kd: calculateKD(rawData.totalKills, rawData.totalDeaths),
        totalKillsOriginal: rawData.totalKills
    },
    headshotStats: {
        count: formatNumber(rawData.totalHeadshots),
        rate: ((rawData.totalHeadshots / rawData.totalKills) * 100).toFixed(1) + '%'
    },
    topWeapon: {
        name: "T77",
        kills: formatNumber(rawData.assaultKills),
        img: "https://pb.tamgame.com/upload/image/weaponInfo/20250417/161806714.png" 
    },
    topMap: {
        name: "LIBRARY",
        matches: "87K+",
        winRate: "93.376"
    },
    duo: {
        name: "511.697 Hour",
        synergy: "DEATH MATCH"
    }
};

// ==========================================
// 2. DOM GENERATION (SLAYTLAR)
// ==========================================
const container = document.getElementById('dynamic-slides');

const slidesHTML = `
    <section class="slide" id="slide-1">
        <div class="bento-container">
            <div class="bento-box box-large" style="background: linear-gradient(to bottom right, rgba(204,255,0,0.1), rgba(20,20,25,0.5));" data-tilt>
                <div class="deco-crosshair-advanced"><div class="dca-ring"></div><div class="dca-inner"></div></div>
                <span class="label accent-text"><i class="ri-trophy-line"></i> OVERALL PERFORMANCE</span>
                <h2 class="big-stat giant-stat-num accent-text scramble-target" data-value="${formatNumber(rawData.totalKills)}" style="margin-top:auto;">0</h2>
                 <span class="label" style="margin-top:-10px;">TOTAL APPROVED KILL</span>
            </div>
            <div class="bento-box" data-tilt>
                <div class="deco-radar"></div>
                <span class="label">MATCH PLAYED</span>
                <h2 class="big-stat">${userData.generalStats.matches}</h2>
            </div>
            <div class="bento-box" data-tilt>
                <div class="deco-pulse-graph"></div>
                <span class="label">K/D RATE</span>
                <h2 class="big-stat purple-text">${userData.generalStats.kd}</h2>
            </div>
        </div>
    </section>

    

    <section class="slide" id="slide-mot-1">
        <div style="text-align:center;">
            <div class="year-badge" style="background:transparent; border: 1px solid white; color:white; transform:none;">ADRENALINE NEVER FALLS</div>
            <h1 class="giant-text" style="font-size: 9vw; margin-top:20px;">YOU WERE THE DOMINANT<br><span class="purple-text" style="text-shadow: 0 0 40px rgba(112,0,255,0.4);">OF THE FIELD</span></h1>
            <p style="font-family:var(--font-head); letter-spacing: 5px; margin-top: 30px; opacity:0.8;">HIS COMPETITORS' NIGHTMARE DREAM.</p>
        </div>
    </section>

    <section class="slide" id="slide-2">
        <div class="bento-container" style="display:block; text-align:center;">
             <span class="label cyan-text" style="font-size:1.2rem; letter-spacing:4px;">AREA OF EXPERTISE</span>
            <h1 class="giant-text" style="font-size: 10vw; color:var(--accent-cyan); text-shadow: 0 0 30px rgba(0,240,255,0.3);">HEAD<br>HUNTER</h1>
            <div class="bento-container" style="height: 30vh; margin-top:40px;">
                 <div class="bento-box" data-tilt style="border-color:var(--accent-cyan);">
                    <div class="deco-crosshair" style="border-color:var(--accent-cyan); opacity:0.5;"></div>
                    <span class="label">HS</span>
                    <h2 class="big-stat cyan-text">${userData.headshotStats.count}</h2>
                </div>
                <div class="bento-box" data-tilt style="background:var(--accent-cyan); color:black;">
                    <span class="label" style="color:rgba(0,0,0,0.6)">HIT RATE</span>
                    <h2 class="big-stat" style="color:black;">${userData.headshotStats.rate}</h2>
                </div>
            </div>
        </div>
    </section>

    <section class="slide" id="slide-clan">
        <div class="bento-container">
            <div class="bento-box box-large" style="background: linear-gradient(to top, rgba(0,0,0,0.8), transparent), url('https://wallup.net/wp-content/uploads/2019/09/07/210872-point-blank-warrior-masks-games-weapon-gun.jpg') center/cover;" data-tilt>
                <div class="deco-crosshair-advanced" style="opacity:0.5;"></div>
                <div style="z-index:2; margin-top:auto;">
                    <span class="label accent-text"><i class="ri-shield-user-line"></i> CLAN RIVALRY</span>
                    <h2 class="big-stat" style="font-size:3.5rem;">BROTHERHOOD<br>WON</h2>
                    <p style="opacity:0.7; margin-top:10px; font-size:0.9rem;">BACK TO BACK STRUGGLES.</p>
                </div>
            </div>

            <div class="bento-box" style="background: var(--accent-cyan); color:black;" data-tilt>
                 <span class="label" style="color:rgba(0,0,0,0.6)">TOTAL CLAN MATCHES</span>
                 <h2 class="big-stat" style="color:black;">450K+</h2>
                 <i class="ri-sword-line" style="position:absolute; right:20px; top:20px; font-size:2rem; opacity:0.2;"></i>
            </div>

            <div class="bento-box" data-tilt>
                 <span class="label">MOST ACTIVE CLANS</span>
                 <div style="display:flex; gap:10px; margin-top:10px;">
                    <span style="background:rgba(255,255,255,0.1); padding:5px 10px; border-radius:5px; font-size:0.8rem;">TG</span>
                    <span style="background:rgba(255,255,255,0.1); padding:5px 10px; border-radius:5px; font-size:0.8rem;">TG_MOD</span>
                 </div>
                 <h2 class="big-stat accent-text" style="font-size:1.5rem; margin-top:10px;">ET AL</h2>
            </div>
        </div>
    </section>

    <section class="slide" id="slide-mot-2">
         <div style="text-align:center;">
            <h1 class="giant-text" style="font-size: 8vw;">YOU NEVER MISSED<br><span class="cyan-text">THE TARGET</span></h1>
            <div class="deco-pulse-graph" style="width: 50%; left:25%; position:relative; margin-top:20px;"></div>
        </div>
    </section>

    <section class="slide" id="slide-3">
        <div class="bento-container" style="display:block; text-align:center;">
            <span class="label">FAVORITE WEAPON</span>
            <h1 class="giant-text" style="font-size: 8vw;">${userData.topWeapon.name}</h1>
            <div class="bento-box box-wide" style="height: 350px; margin-top:20px; border:none; background: transparent;" data-tilt>
                <div class="weapon-blueprint-container">
                    <img src="${userData.topWeapon.img}" class="weapon-blueprint-img" alt="Weapon Blueprint">
                    <div class="blueprint-overlay"></div>
                    <div class="deco-scan" style="background: linear-gradient(to bottom, transparent, var(--accent-volt), transparent); opacity:0.3;"></div>
                </div>
                <div style="position:absolute; bottom:30px; left:30px; text-align:left; z-index:2;">
                    <div class="big-stat accent-text" style="text-shadow: 0 0 10px black;">${userData.topWeapon.kills}</div>
                    <span class="label" style="text-shadow: 0 0 5px black;">KILL TAKEN WITH THIS GUN</span>
                </div>
            </div>
        </div>
    </section>

    <section class="slide" id="slide-dino">
        <div class="bento-container">
            <div class="bento-box box-large" style="background: linear-gradient(to top, rgba(0,0,0,0.9), transparent), url('https://img.goodfon.com/original/1920x1080/9/48/pb-point-blank-dino-dinosaur.jpg') center/cover;" data-tilt>
                <div style="z-index:2; margin-top:auto;">
                    <span class="label" style="color:#44ff44; font-weight:bold; letter-spacing:2px;">NATURAL SELECTION</span>
                    <h1 class="giant-text" style="font-size:4rem; line-height:0.9;">HUMAN VS<br><span style="color:#ff3333;">DINOSAUR</span></h1>
                </div>
                <i class="ri-git-repository-private-fill" style="position:absolute; top:20px; right:20px; font-size:5rem; transform:rotate(45deg); opacity:0.3; color:red;"></i>
            </div>

            <div class="bento-box" style="background:#1a0505; border-color:#ff3333;" data-tilt>
                <span class="label" style="color:#ff3333;">NUMBER OF PEOPLE EATEN</span>
                <h2 class="big-stat" style="color:#ff5555;">85K+</h2>
                <i class="ri-skull-2-fill" style="position:absolute; right:20px; bottom:20px; font-size:2.5rem; opacity:0.2; color:red;"></i>
            </div>

            <div class="bento-box" style="background:#051a05; border-color:#44ff44;" data-tilt>
                <span class="label" style="color:#44ff44;">HUNTING DINOSAUR</span>
                <h2 class="big-stat" style="color:#66ff66;">62K+</h2>
                <div class="deco-radar" style="opacity:0.2;"></div>
            </div>
        </div>
    </section>

    <section class="slide" id="slide-economy">
        <div class="bento-container">
            <div class="bento-box box-wide" style="background: linear-gradient(45deg, #FFD700, #B8860B); color:black;" data-tilt>
                <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">
                    <div>
                        <span class="label" style="color:black; opacity:0.7;">MARKET VOLUME</span>
                        <h1 class="giant-text" style="font-size:4rem; color:black; text-shadow:none;">WAR<br>ECONOMY</h1>
                    </div>
                    <i class="ri-coins-line" style="font-size:8rem; opacity:0.2;"></i>
                </div>
                <div class="deco-scan" style="background: linear-gradient(to bottom, transparent, white, transparent); opacity:0.3;"></div>
            </div>

            <div class="bento-box" data-tilt>
                <span class="label" style="color:#FFD700;">SPENT POINTS</span>
                <h2 class="big-stat" style="color:#FFD700;">999T+</h2>
                <span class="label" style="margin-top:5px; font-size:0.7rem;">EQUIPMENT PURCHASES</span>
            </div>

            <div class="bento-box" data-tilt>
                <div class="deco-pulse-graph"></div>
                <span class="label">OPENED BOX/CHEST</span>
                <h2 class="big-stat">450K+</h2>
                <i class="ri-gift-2-line" style="position:absolute; right:20px; top:20px; font-size:2rem; opacity:0.5;"></i>
            </div>
        </div>
    </section>

    <section class="slide" id="slide-bomb">
        <div class="bento-container">
            <div class="bento-box box-large" style="background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.9)), url('https://lh4.googleusercontent.com/J1X7TYlc8xYn3egknVsPsqSm0FrDSnxpRUbx0Z8ZOOBVw9_gr03y8CUuQsyxgN2R2e5KDSPVBdhpAtxzdHLnMtYw4KWSFORAa2BnagZDc52SwVgRAieVS9Gap4guHsQv9Ybp2qJc=s0') center/cover;" data-tilt>
                <div style="position:absolute; top:30px; right:30px; width:20px; height:20px; background:red; border-radius:50%; box-shadow: 0 0 20px red; animation: blink 1s infinite;"></div>
                
                <div style="z-index:2; margin-top:auto;">
                    <span class="label" style="color:#ff8c00; font-weight:bold; letter-spacing:2px;"><i class="ri-alarm-warning-fill"></i> DUTY STATUS</span>
                    <h1 class="giant-text" style="font-size:3.5rem; line-height:0.9;">RACE WITH<br><span style="color:#ff8c00; text-shadow: 0 0 30px rgba(255,140,0,0.5);">SECONDS</span></h1>
                    <p style="margin-top:15px; font-family:'Courier New', monospace; font-size:1.5rem; color:red;">00:03:45</p>
                </div>
            </div>

            <div class="bento-box" style="background: linear-gradient(45deg, #330000, #1a0000); border-color:red;" data-tilt>
                <i class="ri-fire-fill" style="font-size:3rem; color:red; margin-bottom:10px;"></i>
                <span class="label" style="color:red;">EXPLODING C-4</span>
                <h2 class="big-stat" style="color:#ff4444;">850K+</h2>
                <span class="label" style="font-size:0.7rem; opacity:0.6;">RED TEAM VICTORY</span>
            </div>

            <div class="bento-box" style="background: linear-gradient(45deg, #001a33, #000); border-color:#00aaff;" data-tilt>
                <i class="ri-tools-fill" style="font-size:3rem; color:#00aaff; margin-bottom:10px;"></i>
                <span class="label" style="color:#00aaff;">DESTROYED</span>
                <h2 class="big-stat" style="color:#00ccff;">720K+</h2>
                <span class="label" style="font-size:0.7rem; opacity:0.6;">BLUE TEAM HEROES</span>
            </div>
        </div>
        
        <style>
            @keyframes blink { 0% { opacity: 1; } 50% { opacity: 0.3; } 100% { opacity: 1; } }
        </style>
    </section>

    <section class="slide" id="slide-pbic-1">
        <div class="bento-container" style="display:block; text-align:center;">
            <div class="year-badge" style="background:#e10600; color:white; transform:none; box-shadow: 5px 5px 0 white;">GLOBAL STAGE</div>
            <h1 class="giant-text" style="font-size: 8vw; margin-top:20px;">THE WORLD IS<br><span style="color:#e10600; text-shadow: 0 0 50px rgba(225,6,0,0.6);">IN ISTANBUL</span></h1>
            
            <div class="bento-box box-wide" style="height: 300px; margin-top:20px; background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url('https://scontent-sof1-2.xx.fbcdn.net/v/t39.30808-6/487310342_1077892251043185_7415930684124418905_n.jpg?_nc_cat=103&cb2=99be929b-a592a72f&ccb=1-7&_nc_sid=f727a1&_nc_ohc=z6bpWg_rA_oQ7kNvwG-WCnH&_nc_oc=Admz9pXJ2HEfms6AAWebPqZWDDrWm8JumGd1aJamR1_cq27EqDsjqfJLALuqzgypb68&_nc_zt=23&_nc_ht=scontent-sof1-2.xx&_nc_gid=t4wzpMk388n-AIY-RdnHpg&oh=00_AfkHVDsAVKXOuS3ZR8j_Q542HVYs4SmK_XbTSAEL2aYpgA&oe=6937CF30') center/cover;" data-tilt>
                <div style="position:relative; z-index:2; margin-top:auto;">
                    <h2 class="big-stat" style="font-size:4rem; color:white;">PBIC 2025</h2>
                    <span class="label" style="color:#e10600; font-weight:900; letter-spacing:3px;">HOST TÜRKİYE</span>
                </div>
                <div class="deco-scan" style="background: linear-gradient(to bottom, transparent, #e10600, transparent); opacity:0.2;"></div>
            </div>
        </div>
    </section>

    <section class="slide" id="slide-pbic-2">
        <div class="bento-container">
             <div class="bento-box box-large" style="background: linear-gradient(to top, black, transparent), url('https://scontent-sof1-1.xx.fbcdn.net/v/t39.30808-6/487374391_1077888447710232_6915515017505365523_n.jpg?_nc_cat=100&cb2=99be929b-a592a72f&ccb=1-7&_nc_sid=f727a1&_nc_ohc=21mf56G0jFEQ7kNvwFfKMKg&_nc_oc=AdmGLPR0yOCvMnkrIpTbouDnKGbUyn-mlpp_Pwp4NTEwaIDtRPSBqeJTEAzq_5DRdEE&_nc_zt=23&_nc_ht=scontent-sof1-1.xx&_nc_gid=9Oe-UmqtOHT-EwQDX7oCPg&oh=00_AfkOVmt_6SvHZe2ijeoW_2XfffAeMIASIql12H_BfaS6tg&oe=6937C8FA') center/cover;" data-tilt>
                <div style="z-index:2; margin-top:auto;">
                    <h2 class="big-stat" style="font-size:3rem;">HISTORY<br><span style="color:#e10600;">WAS MADE</span></h2>
                    <p style="font-family:var(--font-head); letter-spacing:2px; margin-top:10px; opacity:0.8;">WE WITNESSED THIS EXCITEMENT.</p>
                </div>
            </div>
            
            <div class="bento-box" style="background: #e10600; color:white;" data-tilt>
                 <span class="label" style="color:rgba(255,255,255,0.8)">ATMOSPHERE</span>
                 <h2 class="big-stat" style="font-size:2.5rem;">IT WAS A LEGEND</h2>
            </div>
            
            <div class="bento-box" style="background: url('https://scontent-sof1-1.xx.fbcdn.net/v/t39.30808-6/487495912_1077893251043085_8337364965410709938_n.jpg?_nc_cat=108&cb2=99be929b-a592a72f&ccb=1-7&_nc_sid=f727a1&_nc_ohc=y3ar7P66rvUQ7kNvwF_pzPc&_nc_oc=AdkE4E-TbPS4-S88f7Gw3xEHnLk_8NVmTymx0WWQaHMAIpu56Udj6fDRIwmy__MtvH0&_nc_zt=23&_nc_ht=scontent-sof1-1.xx&_nc_gid=vk0aMOzTfbl4olUuqw3iJA&oh=00_Afk5hop1Qq7sr3StiuxAZciAzOOVsEDBKhSOgORpjgUaRg&oe=6937E145') center/cover;" data-tilt>
                 <div class="deco-pulse-graph"></div>
            </div>
        </div>
    </section>

    <section class="slide" id="slide-mot-3">
         <div style="text-align:center;">
             <div class="year-badge" style="background:white; color:black; transform:none;">WE ARE STRONG TOGETHER</div>
            <h1 class="giant-text" style="font-size: 7vw; margin-top:30px;">WE WERE VERY GOOD<br><span class="accent-text" style="text-shadow: 0 0 50px rgba(204,255,0,0.5);">WITH YOU</span></h1>
            <p style="font-size: 1.2rem; margin-top: 20px; opacity:0.7;">THIS IS NOT JUST A GAME, IT'S A PASSION.</p>
        </div>
    </section>

    <section class="slide" id="slide-4">
        <div class="bento-container">
             <div class="bento-box box-large" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('https://cdn2.pointblank.id/Web/upload/image/mapInfo/20240208/114034842636.jpg') center/cover;" data-tilt>
                <div style="z-index:2; margin-top:auto;">
                    <span class="label accent-text">HOMEOWNER</span>
                    <h2 class="big-stat" style="font-size:3.5rem;">${userData.topMap.name}</h2>
                    <div class="big-stat accent-text" style="font-size:2rem;">${userData.topMap.winRate} Played for Hours</div>
                </div>
            </div>
            <div class="bento-box" data-tilt>
                 <span class="label purple-text">PLAYING TIME ON ALL MAPS</span>
                 <h2 class="big-stat" style="font-size:2rem;">${userData.duo.name}</h2>
            </div>
             <div class="bento-box" data-tilt style="background:var(--accent-purple);">
                 <span class="label" style="color:rgba(255,255,255,0.7)">MOST PLAYED MODE</span>
                 <h2 class="big-stat">${userData.duo.synergy}</h2>
            </div>
        </div>
    </section>


    <section class="slide" id="slide-extra-1">
        <div class="bento-container">
            <div class="bento-box box-wide" style="background: linear-gradient(to right, rgba(204,0,0,0.2), rgba(0,0,0,0.6));" data-tilt>
                <div class="deco-scan"></div>
                <div style="display:flex; align-items:center; justify-content:space-between; width:100%;">
                    <div>
                        <span class="label" style="color:#ff3333; font-size:1.2rem;">WAR MACHINE</span>
                        <h2 class="big-stat" style="font-size:4rem; margin-top:10px;">SERIAL KILLER</h2>
                    </div>
                    <div style="text-align:right;">
                        <h2 class="big-stat" style="color:#ff3333;">125K+</h2>
                        <span class="label">DOUBLE KILL</span>
                    </div>
                </div>
            </div>

            <div class="bento-box" data-tilt>
                <span class="label">BOMBER</span>
                <h2 class="big-stat">783K+</h2>
                <span class="label" style="margin-top:5px; font-size:0.7rem; opacity:0.6;">KILL WITH A GRENADE</span>
            </div>

            <div class="bento-box" style="background: #ff3333; color:white;" data-tilt>
                <span class="label" style="color:rgba(255,255,255,0.8);">CHAIN KILLER</span>
                <h2 class="big-stat">LEGENDARY</h2>
                <i class="ri-fire-fill" style="position:absolute; right:20px; bottom:20px; font-size:3rem; opacity:0.3;"></i>
            </div>
        </div>
    </section>

    <section class="slide" id="slide-ban">
        <div class="bento-container">
            <div class="bento-box box-wide" style="background: linear-gradient(45deg, #3a0000, #000);" data-tilt>
                <i class="ri-prohibited-line" style="position:absolute; right:-50px; bottom:-50px; font-size:20rem; opacity:0.1; color:red;"></i>
                
                <div style="display:flex; align-items:center; justify-content:space-between; width:100%; position:relative; z-index:2;">
                    <div>
                        <span class="label" style="color:#ff4444; letter-spacing:3px;">SECURITY REPORT</span>
                        <h1 class="giant-text" style="font-size:5vw; margin-top:10px;">JUSTICE<br><span style="color:#ff4444; text-shadow:0 0 30px red;">WAS DONE</span></h1>
                    </div>
                    
                    <div style="text-align:right; border-left: 2px solid #ff4444; padding-left:30px;">
                        <span class="label">BANNED ACCOUNT</span>
                        <h2 class="big-stat" style="color:#ff4444; font-size:4rem;">42.195</h2>
                        <span class="label" style="margin-top:10px; display:block;">100% NO COMPROMISE</span>
                    </div>
                </div>
                
                <div class="deco-scan" style="background: linear-gradient(to bottom, transparent, red, transparent); opacity:0.2;"></div>
            </div>
            
            <div class="bento-box box-wide" style="height:150px; flex-direction:row; align-items:center; justify-content:space-between;" data-tilt>
                <div>
                    <span class="label accent-text">CLEAN GAME MISSION</span>
                    <p style="font-size:1.1rem; opacity:0.8; margin-top:5px;">CHEAT PROTECTION SYSTEM ACTIVE 24/7.</p>
                </div>
                <i class="ri-shield-check-fill" style="font-size:4rem; color:var(--accent-volt);"></i>
            </div>
        </div>
    </section>

    <section class="slide" id="slide-coupon">
        <div class="bento-container" style="display:flex; justify-content:center; align-items:center; flex-direction:column; text-align:center;">
            
            <h1 class="giant-text" style="font-size: 6vw; margin-bottom: 40px;">THANKS<br><span class="accent-text">WARRIOR</span></h1>
            
            <div class="bento-box box-wide" style="width:100%; max-width:600px; height:auto; border: 2px dashed var(--accent-volt); background: rgba(204,255,0,0.05);" data-tilt>
                <div class="deco-crosshair" style="opacity:0.2;"></div>
                <span class="label accent-text" style="letter-spacing:5px;">2025 SPECIAL GIFT CODE</span>
                
                <h2 class="big-stat" style="font-size: 3.5rem; margin: 20px 0; font-family:'Courier New', monospace; letter-spacing:-2px; background:black; padding:10px 20px; border-radius:10px;">
                    PB-2025-GIFT
                </h2>
                
                <p style="font-family:var(--font-head); font-size:1rem; opacity:0.7;">YOU CAN USE THIS CODE ON THE COUPON PAGE.</p>
                <div class="year-badge" onclick="copyCoupon(this)" style="margin-top:20px; transform:none; cursor:pointer;">COPY CODE</div>
            </div>
        </div>
    </section>

    <section class="slide" id="slide-5">
        <div style="text-align:center; position:relative; z-index:10;">
            <div class="year-badge" style="transform:none; margin-bottom:20px; background:white;">FINAL REPORT</div>
            <h1 class="giant-text" style="font-size: 11vw; line-height:0.9;">ABSOLUTE<br><span class="accent-text">DOMINATION</span></h1>
            <p style="margin-top:30px; font-family:var(--font-head); letter-spacing:3px; font-size:1.2rem;">2026 IS WAITING FOR YOU.</p>
            <button class="share-btn tilt-effect" onclick="generateShareCard()" style="margin: 50px auto; transform:scale(1.2);">
                <i class="ri-instagram-line"></i><span>DOWNLOAD YOUR STORY</span>
            </button>
            <p style="margin-top:20px; opacity:0.5; font-size:0.8rem; cursor:pointer;" onclick="location.reload()">WATCH AGAIN</p>
        </div>
    </section>
`;
container.innerHTML = slidesHTML;

// ==========================================
// 3. NAVIGATION & LOGIC
// ==========================================
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const progressLine = document.getElementById('progressLine');
const currentStepEl = document.querySelector('.current-step');
const totalStepEl = document.querySelector('.total-step');
const bgMusic = document.getElementById('bgMusic');
const introText = document.querySelector('#slide-0 .giant-text');

let autoPlayInterval;
const AUTO_PLAY_DURATION = 15000;

if(totalStepEl) totalStepEl.innerText = totalSlides.toString().padStart(2, '0');

function startAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(() => {
        if (currentSlide < totalSlides - 1) nextSlide(true);
        else clearInterval(autoPlayInterval);
    }, AUTO_PLAY_DURATION);
}

function resetAutoPlay() { clearInterval(autoPlayInterval); startAutoPlay(); }

function updateUI() {
    const percent = ((currentSlide + 1) / totalSlides) * 100;
    progressLine.style.width = percent + '%';
    currentStepEl.innerText = (currentSlide + 1).toString().padStart(2, '0');
    document.getElementById('prevBtn').classList.toggle('disabled', currentSlide === 0);
    document.getElementById('nextBtn').classList.toggle('disabled', currentSlide === totalSlides - 1);
}

function animateSlide(fromIndex, toIndex) {
    const fromSlide = slides[fromIndex];
    const toSlide = slides[toIndex];
    if (fromIndex === 0 && introText) introText.classList.remove('animate-intro');
    
    const tl = gsap.timeline({
        onComplete: () => {
            fromSlide.classList.remove('active');
            toSlide.classList.add('active');
            if (toIndex === 0 && introText) { void introText.offsetWidth; introText.classList.add('animate-intro'); }
            const scrambleEls = toSlide.querySelectorAll('.scramble-target');
            if(scrambleEls) scrambleEls.forEach(el => animateScramble(el));
            VanillaTilt.init(document.querySelectorAll("[data-tilt]"), { max: 10, speed: 400, glare: true, "max-glare": 0.2 });
        }
    });
    tl.to(fromSlide.children, { opacity: 0, y: -50, duration: 0.4, stagger: 0.05 });
    const nextTl = gsap.timeline({ delay: 0.4 });
    nextTl.fromTo(toSlide, { opacity: 0 }, { opacity: 1, duration: 0.1 })
          .fromTo(toSlide.querySelectorAll('.bento-box, .giant-text, .share-btn, .year-badge, .start-trigger, p'), 
            { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" });
}

window.nextSlide = function(isAuto = false) {
    if(!isAuto && currentSlide === 0 && bgMusic.paused) toggleAudio();
    if(!isAuto) resetAutoPlay();
    if(currentSlide < totalSlides - 1) { animateSlide(currentSlide, currentSlide + 1); currentSlide++; updateUI(); }
}

window.prevSlide = function() {
    resetAutoPlay();
    if(currentSlide > 0) { animateSlide(currentSlide, currentSlide - 1); currentSlide--; updateUI(); }
}

function animateScramble(element) {
    const finalValue = element.getAttribute('data-value');
    if (!finalValue) return;
    const chars = "0123456789";
    let iterations = 0;
    const interval = setInterval(() => {
        element.innerText = finalValue.split("").map((letter, index) => {
            if(index < iterations) return finalValue[index];
            return chars[Math.floor(Math.random() * 10)];
        }).join("");
        if(iterations >= finalValue.length) clearInterval(interval);
        iterations += 1/2;
    }, 50);
}

// ==========================================
// 4. ACTIONS
// ==========================================
function submitLogin() {
    const input = document.getElementById('nicknameInput');
    const name = input.value.trim().toUpperCase();
    if(name === "") { input.style.borderBottomColor = "red"; input.placeholder = "ENTER YOUR NICKNAME!"; return; }
    
    userData.username = name;
    document.getElementById('intro-username-display').innerText = userData.username;
    document.getElementById('share-username-display').innerText = userData.username;
    document.getElementById('login-overlay').classList.add('hidden');

    const bgMusic = document.getElementById('bgMusic');
    bgMusic.play().then(() => {
        bgMusic.volume = 0.4; document.getElementById('soundText').innerText = "SOUND ON";
        document.querySelectorAll('.equalizer .bar').forEach(b => b.style.animationPlayState = 'running');
    }).catch(e => console.log("Müzik hatası:", e));
    initPageAnimations();
}

document.getElementById('nicknameInput').addEventListener("keypress", function(event) { if (event.key === "Enter") submitLogin(); });

window.copyCoupon = function(element) {
    navigator.clipboard.writeText("PB-2025-GIFT").then(() => {
        const originalText = element.innerText;
        element.innerText = "COPIED! ✅";
        element.style.background = "#ccff00"; element.style.color = "black";
        setTimeout(() => { element.innerText = originalText; element.style.background = ""; element.style.color = ""; }, 2000);
    });
}

window.generateShareCard = function() {
    const originalCard = document.getElementById('share-card');
    document.getElementById('share-kills').innerText = formatNumber(rawData.totalKills);
    document.getElementById('share-hs').innerText = userData.headshotStats.rate;
    document.getElementById('share-win').innerText = userData.generalStats.winRate;
    document.getElementById('share-weapon').innerText = userData.topWeapon.name;
    document.getElementById('share-username-display').innerText = userData.username;

    const btn = document.querySelector('.share-btn');
    const oldText = btn.innerHTML;
    btn.innerHTML = `<i class="ri-loader-4-line ri-spin"></i> Getting ready...`;
    btn.style.pointerEvents = "none";

    const clonedCard = originalCard.cloneNode(true);
    clonedCard.style.position = "fixed"; clonedCard.style.left = "-10000px"; clonedCard.style.top = "0"; clonedCard.style.zIndex = "99999"; clonedCard.style.display = "flex";
    document.body.appendChild(clonedCard);

    html2canvas(clonedCard, { scale: 1, backgroundColor: "#050505", useCORS: true, allowTaint: true }).then(canvas => {
        const link = document.createElement('a');
        link.download = `PB_2025_Sezon_${userData.username}.png`;
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link); link.click(); document.body.removeChild(link);
        document.body.removeChild(clonedCard);
        btn.innerHTML = oldText; btn.style.pointerEvents = "auto";
    }).catch(err => {
        console.error(err);
        if(document.body.contains(clonedCard)) document.body.removeChild(clonedCard);
        btn.innerHTML = "ERROR!";
        setTimeout(() => { btn.innerHTML = oldText; btn.style.pointerEvents = "auto"; }, 2000);
    });
}

window.toggleAudio = function() {
    if (bgMusic.paused) {
        bgMusic.play().then(() => { bgMusic.volume = 0.4; document.getElementById('soundText').innerText = "SOUND ON"; document.querySelectorAll('.equalizer .bar').forEach(b => b.style.animationPlayState = 'running'); });
    } else {
        bgMusic.pause(); document.getElementById('soundText').innerText = "SOUND OFF"; document.querySelectorAll('.equalizer .bar').forEach(b => b.style.animationPlayState = 'paused');
    }
}

function initPageAnimations() {
    const introText = document.querySelector('#slide-0 .giant-text');
    if(introText) introText.classList.add('animate-intro');
    gsap.to('.year-badge, .start-trigger', { opacity: 1, duration: 1, delay: 0.8, stagger: 0.3, ease: "power2.out" });
    startAutoPlay(); 
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), { max: 10, speed: 400, glare: true, "max-glare": 0.2 });
}

// ==========================================
// SHARE CARD GENERATOR (ENGLISH VERSION)
// ==========================================
window.generateShareCard = function() {
    const originalCard = document.getElementById('share-card');
    
    // Verileri İngilizce Karta İşle
    document.getElementById('share-kills').innerText = formatNumber(rawData.totalKills);
    document.getElementById('share-hs').innerText = userData.headshotStats.rate;
    document.getElementById('share-win').innerText = userData.generalStats.winRate;
    document.getElementById('share-kd').innerText = userData.generalStats.kd;
    document.getElementById('share-weapon').innerText = userData.topWeapon.name;
    document.getElementById('share-username-display').innerText = userData.username; // Kullanıcı adı

    const btn = document.querySelector('.share-btn');
    const oldText = btn.innerHTML;
    btn.innerHTML = `<i class="ri-loader-4-line ri-spin"></i> GENERATING...`; // İngilizce Yükleniyor
    btn.style.pointerEvents = "none";

    // Hayalet Kopya
    const clonedCard = originalCard.cloneNode(true);
    clonedCard.style.position = "fixed";
    clonedCard.style.left = "-10000px";
    clonedCard.style.top = "0";
    clonedCard.style.zIndex = "99999";
    clonedCard.style.display = "flex";
    document.body.appendChild(clonedCard);

    html2canvas(clonedCard, {
        scale: 1, 
        backgroundColor: "#0a0a0e", // Koyu Arka Plan
        useCORS: true, 
        allowTaint: true
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `PB_2025_Report_${userData.username}.png`;
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        document.body.removeChild(clonedCard);
        btn.innerHTML = oldText;
        btn.style.pointerEvents = "auto";
    }).catch(err => {
        console.error("Error:", err);
        if(document.body.contains(clonedCard)) document.body.removeChild(clonedCard);
        btn.innerHTML = "ERROR";
        setTimeout(() => {
            btn.innerHTML = oldText;
            btn.style.pointerEvents = "auto";
        }, 2000);
    });
}