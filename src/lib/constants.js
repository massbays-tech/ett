export const waterQualitySelections = ['nitrogen', 'phosphorus', 'temperature', 'pH', 'clarity', 'salinity', 'dissolved oxygen', 'e. coli', 'enterococcus'];
export const habitatSelections = ['salt marsh', 'tidal flats', 'eelgrass', 'diadromous fish'];
export const habitatIndexSelections = ['index 1', 'index 2', 'index 3']
export const imageLibraryHabitat = {
  'eelgrass': {
    title: 'Eelgrass',
    img: require('@/assets/imgs/eelgrass_img.jpg'),
    pic: require('@/assets/icons/eelgrass.svg'),
    currentYear: 'TBD',
    historicYear: '1995',
    source: 'MassDEP',
    currentColor: '#e319a6',
    historicColor: '#eba4d5'
  },
  'salt marsh': {
    title: 'Salt Marsh',
    img: require('@/assets/imgs/salt_marsh_img.jpg'),
    pic: require('@/assets/icons/salt_marsh.svg'),
    currentYear: '2005',
    historicYear: '1990-2000',
    source: 'MassDEP',
    currentColor: '#255c33',
    historicColor: '#68f28d'
  },
  'tidal flats': {
    title: 'Tidal Flats',
    img: require('@/assets/imgs/tidal_flats_img.jpg'),
    pic: require('@/assets/icons/tidal_flats.svg'),
    currentYear: '2005',
    historicYear: '1990-2000',
    source: 'MassDEP',
    currentColor: '#c96b12',
    historicColor: '#deb187'
  },
  'diadromous fish': {
    title: 'Diadromous Fish',
    img: require('@/assets/imgs/diadromous_img.jpg'),
    pic: require('@/assets/icons/diadromous.svg'),
    currentYear: 'TBD',
    historicYear: 'TBD',
    source: 'MassBays',
    currentColor: '#000000',
    historicColor: '#ffffff'
  }
}
export const imageLibraryWaterQuality = {
  'nitrogen': {
    title: 'nitrogen',
    img: require('@/assets/imgs/white_box.jpg'),
    pic: require('@/assets/icons/nitrogen.png')
  },
  'phosphorus': {
    title: 'phosphorus',
    img: require('@/assets/imgs/white_box.jpg'),
    pic: require('@/assets/icons/phosphorus.png')
  },
  'temperature': {
    title: 'temperature',
    img: require('@/assets/imgs/white_box.jpg'),
    pic: require('@/assets/icons/temperature.png')
  },
  'pH': {
    title: 'pH',
    img: require('@/assets/imgs/white_box.jpg'),
    pic: require('@/assets/icons/ph.png')
  },
  'clarity': {
    title: 'clarity',
    img: require('@/assets/imgs/white_box.jpg'),
    pic: require('@/assets/icons/clarity.png')
  },
  'salinity': {
    title: 'salinity',
    img: require('@/assets/imgs/white_box.jpg'),
    pic: require('@/assets/icons/salinity.png')
  },
  'dissolved oxygen': {
    title: 'dissolved oxygen',
    img: require('@/assets/imgs/white_box.jpg'),
    pic: require('@/assets/icons/dissolved_oxygen.png')
  },
  'e. coli': {
    title: 'e. coli',
    img: require('@/assets/imgs/white_box.jpg'),
    pic: require('@/assets/icons/e_coli.png')
  },
  'enterococcus': {
    title: 'enterococcus',
    img: require('@/assets/imgs/white_box.jpg'),
    pic: require('@/assets/icons/enterococcus.png')
  }
}