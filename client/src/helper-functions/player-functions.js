const iconCard = {
  url: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/226077811_931117614135776_1330883807236193151_n.png?_nc_cat=110&ccb=1-3&_nc_sid=aee45a&_nc_ohc=vpI9R1wcjSkAX-iC008&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=1443dfca95eb7847a6d7fa0fa388e281&oe=612A08AA',
  used: false,
  needWhiteWriting: false,
};

const normalCard = {
  used: false,
  needWhiteWriting: false,
  url: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/222193876_292896532593160_624424671877791562_n.png?_nc_cat=100&ccb=1-3&_nc_sid=aee45a&_nc_ohc=kztlqwu-NkkAX8uyQUJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=d303d4c00c57006360e1672bc4c4f67a&oe=6128CCE7',
};

const neonCard = {
  used: false,
  needWhiteWriting: true,
  url: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/217547431_562962811379861_6134451003725121461_n.png?_nc_cat=101&ccb=1-3&_nc_sid=aee45a&_nc_ohc=iJ7tRzNXqB8AX_1Zh-I&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=90172f555f4f48ad0f8f1611f87d00f8&oe=612ABEC0',
};

const fireWorkCard = {
  url: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/227876099_200030145415450_1873226119598340546_n.png?_nc_cat=109&ccb=1-3&_nc_sid=aee45a&_nc_ohc=Fq7NbQ8kRlUAX8RiVDQ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=2efb33d7d681b6bf3fa6ecea2e5d6fb7&oe=612C4AF3',
};

const blackCard = {
  url: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/228207875_664672958263219_5607581264108048679_n.png?_nc_cat=107&ccb=1-3&_nc_sid=aee45a&_nc_ohc=rNFmibJnTf0AX89qiaD&_nc_oc=AQmeEVvGR_jFjvboPJneGlaKsLJGlEtc32snrnwpmCaD90DqeuzRgHfQHL6xTrbzqYVsmlTUfAfCwkZvdtQEBbv-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=06d8c2ad07418fe80d3445c8fb23ba1a&oe=612C6E48',
};

export function determineCard(player) {
  let url = '';
  player.goals >= 10 ? (url = iconCard.url) : (url = normalCard.url);
  if (player.games >= 20) {
    url = neonCard.url;
  }
  if (player.motms >= 10) {
    url = blackCard.url;
  }
  if (player.wins >= 10) {
    url = fireWorkCard.url;
  }

  return url;
}

export function determinePlayerNameClass(player) {
  let className = '';
  player.games >= 20
    ? (className = 'Player_whitePlayerName')
    : (className = 'Player_playerName');
  if (player.motms >= 10) {
    className = 'Player_whitePlayerName';
  }

  return className;
}

export function determineStatClass(player) {
  let className = '';
  player.games >= 20
    ? (className = 'Player_whiteStat')
    : (className = 'Player_stat');
  if (player.motms >= 10) {
    className = 'Player_whiteStat';
  }
  return className;
}
