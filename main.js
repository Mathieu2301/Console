module.exports = function init(char = '§', timestamp = false, CORR = 0, timeColor = '94') {
  const _ = {...console};
  const regex = new RegExp(`${char}[0-9]{0,3}`, 'g');
  const addZeros = (nbr) => (parseInt(nbr, 10) < 10 ? `0${nbr}` : `${nbr}`);

  const LOG = (t) => (...l) => {
    if (timestamp) {
      const d = new Date(Date.now() + CORR);

      l.unshift(`${char}${timeColor}[${addZeros(d.getDate())
      }/${addZeros(d.getMonth() + 1)
      } ${addZeros(d.getHours())
      }:${addZeros(d.getHours())
      }:${addZeros(d.getSeconds())
      }]${char}0`);
    }

    return _[t](...l.map((l) => (typeof l !== 'string') ? l : l.replace(regex, (s) => `\x1b[${s.replace(char, '')}m`)), '\x1b[0m');
  };

  console = {
    ...console,
    log: LOG('log'),
    info: LOG('info'),
    warn: LOG('warn'),
    error: LOG('error'),
  };
}
