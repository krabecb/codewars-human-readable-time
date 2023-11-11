function humanReadable (seconds) {
  if (!seconds) { return '00:00:00' }
  const remainingSec = seconds % 3600
  let hh = Math.floor(seconds / 3600)
  let mm = Math.floor(remainingSec / 60)
  let ss = seconds % 60
  
  if (hh.toString().length < 2) { hh = hh.toString().padStart(2, '0')}
  if (mm.toString().length < 2) { mm = mm.toString().padStart(2, '0')}
  if (ss.toString().length < 2) { ss = ss.toString().padStart(2, '0')}
  return `${hh}:${mm}:${ss}`;
}
