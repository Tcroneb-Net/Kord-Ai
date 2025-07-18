const fonts = {
    royalScript: {
      'A': '𝒜', 'B': '𝐵', 'C': '𝒞', 'D': '𝒟', 'E': '𝐸', 'F': '𝐹', 'G': '𝒢',
      'H': '𝐻', 'I': '𝐼', 'J': '𝒥', 'K': '𝒦', 'L': '𝐿', 'M': '𝑀', 'N': '𝒩',
      'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': '𝑅', 'S': '𝒮', 'T': '𝒯', 'U': '𝒰',
      'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵',
      'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': '𝑒', 'f': '𝒻', 'g': '𝑔',
      'h': '𝒽', 'i': '𝒾', 'j': '𝒿', 'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃',
      'o': '𝑜', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉', 'u': '𝓊',
      'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏'
    },
    smallItalicBoldScript: {
        'a': '𝙖', 'b': '𝙗', 'c': '𝙘', 'd': '𝙙', 'e': '𝙚', 'f': '𝙛', 'g': '𝙜', 'h': '𝙝', 'i': '𝙞', 'j': '𝙟',
        'k': '𝙠', 'l': '𝙡', 'm': '𝙢', 'n': '𝙣', 'o': '𝙤', 'p': '𝙥', 'q': '𝙦', 'r': '𝙧', 's': '𝙨', 't': '𝙩',
        'u': '𝙪', 'v': '𝙫', 'w': '𝙬', 'x': '𝙭', 'y': '𝙮', 'z': '𝙯',
        'A': '𝘼', 'B': '𝘽', 'C': '𝘾', 'D': '𝘿', 'E': '𝙀', 'F': '𝙁', 'G': '𝙂', 'H': '𝙃', 'I': '𝙄', 'J': '𝙅',
        'K': '𝙆', 'L': '𝙇', 'M': '𝙈', 'N': '𝙉', 'O': '𝙊', 'P': '𝙋', 'Q': '𝙌', 'R': '𝙍', 'S': '𝙎', 'T': '𝙏',
        'U': '𝙐', 'V': '𝙑', 'W': '𝙒', 'X': '𝙓', 'Y': '𝙔', 'Z': '𝙕'
    },
    mathBold: {
        'a': '𝒂', 'b': '𝒃', 'c': '𝒄', 'd': '𝒅', 'e': '𝒆', 'f': '𝒇', 'g': '𝒈',
        'h': '𝒉', 'i': '𝒊', 'j': '𝒋', 'k': '𝒌', 'l': '𝒍', 'm': '𝒎', 'n': '𝒏',
        'o': '𝒐', 'p': '𝒑', 'q': '𝒒', 'r': '𝒓', 's': '𝒔', 't': '𝒕', 'u': '𝒖',
        'v': '𝒗', 'w': '𝒘', 'x': '𝒙', 'y': '𝒚', 'z': '𝒛',
        'A': '𝑨', 'B': '𝑩', 'C': '𝑪', 'D': '𝑫', 'E': '𝑬', 'F': '𝑭', 'G': '𝑮',
        'H': '𝑯', 'I': '𝑰', 'J': '𝑱', 'K': '𝑲', 'L': '𝑳', 'M': '𝑴', 'N': '𝑵',
        'O': '𝑶', 'P': '𝑷', 'Q': '𝑸', 'R': '𝑹', 'S': '𝑺', 'T': '𝑻', 'U': '𝑼',
        'V': '𝑽', 'W': '𝑾', 'X': '𝑿', 'Y': '𝒀', 'Z': '𝒁'
    },
    roundSmallScript: {
        'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ',
        'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ',
        'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ',
        'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ',
        'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ',
        'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ'
    },
    italicSerif: {
        'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺',
        'H': '𝐻', 'I': '𝐼', 'J': '𝐽', 'K': '𝑘', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁',
        'O': '𝑂', 'P': '𝑃', 'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇', 'U': '𝑈',
        'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌', 'Z': '𝑍', 'a': '𝑎', 'b': '𝑏',
        'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': '𝒽', 'i': '𝒾',
        'j': '𝒿', 'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': '𝑜', 'p': '𝓅',
        'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉', 'u': '𝓊', 'v': '𝓋', 'w': '𝓌',
        'x': '𝓍', 'y': '𝓎', 'z': '𝓏'
      },
      sansBold: {
        'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚',
        'H': '𝗛', 'I': '𝗜', 'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡',
        'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧', 'U': '𝗨',
        'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭',
        'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴',
        'h': '𝗵', 'i': '𝗶', 'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻',
        'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁', 'u': '𝘂',
        'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇'
    },

    sansItalic: {
        'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎',
        'H': '𝘏', 'I': '𝘐', 'J': '𝘑', 'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕',
        'O': '𝘖', 'P': '𝘗', 'Q': '𝘘', 'R': '𝘙', 'S': '𝘚', 'T': '𝘛', 'U': '𝘜',
        'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡',
        'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨',
        'h': '𝘩', 'i': '𝘪', 'j': '𝘫', 'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯',
        'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵', 'u': '𝘶',
        'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻'
    },

    futureAlien: {
    'A': 'Ａ', 'B': 'Ｂ', 'C': 'Ｃ', 'D': 'Ｄ', 'E': 'Ｅ', 'F': 'Ｆ', 'G': 'Ｇ',
    'H': 'Ｈ', 'I': 'Ｉ', 'J': 'Ｊ', 'K': 'Ｋ', 'L': 'Ｌ', 'M': 'Ｍ', 'N': 'Ｎ',
    'O': 'Ｏ', 'P': 'Ｐ', 'Q': 'Ｑ', 'R': 'Ｒ', 'S': 'Ｓ', 'T': 'Ｔ', 'U': 'Ｕ',
    'V': 'Ｖ', 'W': 'Ｗ', 'X': 'Ｘ', 'Y': 'Ｙ', 'Z': 'Ｚ',
    'a': 'ａ', 'b': 'ｂ', 'c': 'ｃ', 'd': 'ｄ', 'e': 'ｅ', 'f': 'ｆ', 'g': 'ｇ',
    'h': 'ｈ', 'i': 'ｉ', 'j': 'ｊ', 'k': 'ｋ', 'l': 'ｌ', 'm': 'ｍ', 'n': 'ｎ',
    'o': 'ｏ', 'p': 'ｐ', 'q': 'ｑ', 'r': 'ｒ', 's': 'ｓ', 't': 'ｔ', 'u': 'ｕ',
    'v': 'ｖ', 'w': 'ｗ', 'x': 'ｘ', 'y': 'ｙ', 'z': 'ｚ',
    '0': '０', '1': '１', '2': '２', '3': '３', '4': '４', '5': '５', '6': '６',
    '7': '７', '8': '８', '9': '９'
  },
  
  monospace: {
    'A': '𝙰', 'B': '𝙱', 'C': '𝙲', 'D': '𝙳', 'E': '𝙴', 'F': '𝙵', 'G': '𝙶',
    'H': '𝙷', 'I': '𝙸', 'J': '𝙹', 'K': '𝙺', 'L': '𝙻', 'M': '𝙼', 'N': '𝙽',
    'O': '𝙾', 'P': '𝙿', 'Q': '𝚀', 'R': '𝚁', 'S': '𝚂', 'T': '𝚃', 'U': '𝚄',
    'V': '𝚅', 'W': '𝚆', 'X': '𝚇', 'Y': '𝚈', 'Z': '𝚉',
    'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎', 'f': '𝚏', 'g': '𝚐',
    'h': '𝚑', 'i': '𝚒', 'j': '𝚓', 'k': '𝚔', 'l': '𝚕', 'm': '𝚖', 'n': '𝚗',
    'o': '𝚘', 'p': '𝚙', 'q': '𝚚', 'r': '𝚛', 's': '𝚜', 't': '𝚝', 'u': '𝚞',
    'v': '𝚟', 'w': '𝚠', 'x': '𝚡', 'y': '𝚢', 'z': '𝚣',
    '0': '𝟶', '1': '𝟷', '2': '𝟸', '3': '𝟹', '4': '𝟺', '5': '𝟻', '6': '𝟼',
    '7': '𝟽', '8': '𝟾', '9': '𝟿'
  },
    
    boldBigScript: {
        'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛', 'I': '𝗜', 'J': '𝗝',
        'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧',
        'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭',
        'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶', 'j': '𝗷',
        'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁',
        'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇'
    },
    geometricModern: {
        'A': '𝙰', 'B': '𝙱', 'C': '𝙲', 'D': '𝙳', 'E': '𝙴', 'F': '𝙵', 'G': '𝙶', 'H': '𝙷', 'I': '𝙸', 'J': '𝙹',
        'K': '𝙺', 'L': '𝙻', 'M': '𝙼', 'N': '𝙽', 'O': '𝙾', 'P': '𝙿', 'Q': '𝚀', 'R': '𝚁', 'S': '𝚂', 'T': '𝚃',
        'U': '𝚄', 'V': '𝚅', 'W': '𝚆', 'X': '𝚇', 'Y': '𝚈', 'Z': '𝚉',
        'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎', 'f': '𝚏', 'g': '𝚐', 'h': '𝚑', 'i': '𝚒', 'j': '𝚓',
        'k': '𝚔', 'l': '𝚕', 'm': '𝚖', 'n': '𝚗', 'o': '𝚘', 'p': '𝚙', 'q': '𝚚', 'r': '𝚛', 's': '𝚜', 't': '𝚝',
        'u': '𝚞', 'v': '𝚟', 'w': '𝚠', 'x': '𝚡', 'y': '𝚢', 'z': '𝚣',
        '0': '𝟶', '1': '𝟷', '2': '𝟸', '3': '𝟹', '4': '𝟺', '5': '𝟻', '6': '𝟼', '7': '𝟽', '8': '𝟾', '9': '𝟿'
    },
    retroPixel: {
        'A': '🅰', 'B': '🅱', 'C': '🅲', 'D': '🅳', 'E': '🅴', 'F': '🅵', 'G': '🅶', 'H': '🅷', 'I': '🅸', 'J': '🅹',
        'K': '🅺', 'L': '🅻', 'M': '🅼', 'N': '🅽', 'O': '🅾', 'P': '🅿', 'Q': '🆀', 'R': '🆁', 'S': '🆂', 'T': '🆃',
        'U': '🆄', 'V': '🆅', 'W': '🆆', 'X': '🆇', 'Y': '🆈', 'Z': '🆉',
        'a': '🄰', 'b': '🄱', 'c': '🄲', 'd': '🄳', 'e': '🄴', 'f': '🄵', 'g': '🄶', 'h': '🄷', 'i': '🄸', 'j': '🄹',
        'k': '🄺', 'l': '🄻', 'm': '🄼', 'n': '🄽', 'o': '🄾', 'p': '🄿', 'q': '🅀', 'r': '🅁', 's': '🅂', 't': '🅃',
        'u': '🅄', 'v': '🅅', 'w': '🅆', 'x': '🅇', 'y': '🅈', 'z': '🅉',
        '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍', '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
    },
    retroPixel: {
        'A': '🅰', 'B': '🅱', 'C': '🅲', 'D': '🅳', 'E': '🅴', 'F': '🅵', 'G': '🅶', 'H': '🅷', 'I': '🅸', 'J': '🅹',
        'K': '🅺', 'L': '🅻', 'M': '🅼', 'N': '🅽', 'O': '🅾', 'P': '🅿', 'Q': '🆀', 'R': '🆁', 'S': '🆂', 'T': '🆃',
        'U': '🆄', 'V': '🆅', 'W': '🆆', 'X': '🆇', 'Y': '🆈', 'Z': '🆉',
        'a': '🄰', 'b': '🄱', 'c': '🄲', 'd': '🄳', 'e': '🄴', 'f': '🄵', 'g': '🄶', 'h': '🄷', 'i': '🄸', 'j': '🄹',
        'k': '🄺', 'l': '🄻', 'm': '🄼', 'n': '🄽', 'o': '🄾', 'p': '🄿', 'q': '🅀', 'r': '🅁', 's': '🅂', 't': '🅃',
        'u': '🅄', 'v': '🅅', 'w': '🅆', 'x': '🅇', 'y': '🅈', 'z': '🅉',
        '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍', '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
    },
    retroPixel: {
        'A': '🅰', 'B': '🅱', 'C': '🅲', 'D': '🅳', 'E': '🅴', 'F': '🅵', 'G': '🅶', 'H': '🅷', 'I': '🅸', 'J': '🅹',
        'K': '🅺', 'L': '🅻', 'M': '🅼', 'N': '🅽', 'O': '🅾', 'P': '🅿', 'Q': '🆀', 'R': '🆁', 'S': '🆂', 'T': '🆃',
        'U': '🆄', 'V': '🆅', 'W': '🆆', 'X': '🆇', 'Y': '🆈', 'Z': '🆉',
        'a': '🄰', 'b': '🄱', 'c': '🄲', 'd': '🄳', 'e': '🄴', 'f': '🄵', 'g': '🄶', 'h': '🄷', 'i': '🄸', 'j': '🄹',
        'k': '🄺', 'l': '🄻', 'm': '🄼', 'n': '🄽', 'o': '🄾', 'p': '🄿', 'q': '🅀', 'r': '🅁', 's': '🅂', 't': '🅃',
        'u': '🅄', 'v': '🅅', 'w': '🅆', 'x': '🅇', 'y': '🅈', 'z': '🅉',
        '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍', '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
    },
    vintageTelegraph: {
        'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀', 'J': '𝕁',
        'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋',
        'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ',
        'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛',
        'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥',
        'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫',
        '0': '𝟘', '1': '𝟙', '2': '𝟚', '3': '𝟛', '4': '𝟜', '5': '𝟝', '6': '𝟞', '7': '𝟟', '8': '𝟠', '9': '𝟡'
    },
    vintageTelegraph: {
        'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀', 'J': '𝕁',
        'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋',
        'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ',
        'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛',
        'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥',
        'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫',
        '0': '𝟘', '1': '𝟙', '2': '𝟚', '3': '𝟛', '4': '𝟜', '5': '𝟝', '6': '𝟞', '7': '𝟟', '8': '𝟠', '9': '𝟡'
    },
    floralScript: {
        'A': 'Ꮧ', 'B': 'Ᏸ', 'C': 'Ꮸ', 'D': 'Ꭰ', 'E': 'Ꭼ', 'F': 'Ꭶ', 'G': 'Ꮆ', 'H': 'Ꮒ', 'I': 'Ꭵ', 'J': 'Ꭻ',
        'K': 'Ꮶ', 'L': 'Ꮭ', 'M': 'Ꮇ', 'N': 'Ꮑ', 'O': 'Ꭷ', 'P': 'Ꭾ', 'Q': 'Ꭴ', 'R': 'Ꮢ', 'S': 'Ꮥ', 'T': 'Ꮦ',
        'U': 'Ꮼ', 'V': 'Ꮙ', 'W': 'Ꮗ', 'X': 'Ꮀ', 'Y': 'Ꮍ', 'Z': 'Ꮓ',
        'a': 'ꮧ', 'b': 'ᏸ', 'c': 'ꮸ', 'd': 'ꭰ', 'e': 'ꭼ', 'f': 'ꭶ', 'g': 'ꮆ', 'h': 'ꮒ', 'i': 'ꭵ', 'j': 'ꭻ',
        'k': 'ꮶ', 'l': 'ꮭ', 'm': 'ꮇ', 'n': 'ꮑ', 'o': 'ꭷ', 'p': 'ꭾ', 'q': 'ꭴ', 'r': 'ꮢ', 's': 'ꮥ', 't': 'ꮦ',
        'u': 'ꮼ', 'v': 'ꮙ', 'w': 'ꮗ', 'x': 'ꮀ', 'y': 'ꮍ', 'z': 'ꮓ',
        '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
    },
    enchantedGlyph: {
        'A': 'Ꭺ', 'B': 'Ᏼ', 'C': 'Ꮯ', 'D': 'Ꭰ', 'E': 'Ꭼ', 'F': 'Ꮁ', 'G': 'Ꮐ', 'H': 'Ꮋ', 'I': 'Ꮖ', 'J': 'Ꮽ',
        'K': 'Ꮶ', 'L': 'Ꮮ', 'M': 'Ꮇ', 'N': 'Ꮀ', 'O': 'Ꮻ', 'P': 'Ꮲ', 'Q': 'Ꭴ', 'R': 'Ꮢ', 'S': 'Ꮥ', 'T': 'Ꮦ',
        'U': 'Ꮼ', 'V': 'Ꮩ', 'W': 'Ꮗ', 'X': 'ᕽ', 'Y': 'Ꮍ', 'Z': 'Ꮓ',
        'a': 'ą', 'b': 'ҍ', 'c': 'ç', 'd': 'ժ', 'e': 'ҽ', 'f': 'ƒ', 'g': 'ց', 'h': 'հ', 'i': 'ì', 'j': 'ᴊ',
        'k': 'ҟ', 'l': 'Ӏ', 'm': 'ʍ', 'n': 'ղ', 'o': 'օ', 'p': 'ք', 'q': 'զ', 'r': 'ɾ', 's': 'ʂ', 't': 't',
        'u': 'մ', 'v': 'ѵ', 'w': 'ա', 'x': '×', 'y': 'վ', 'z': 'Հ',
        '0': '۰', '1': '௱', '2': '؆', '3': '੩', '4': '४', '5': '५', '6': '౬', '7': '７', '8': '৪', '9': '௯'
    },
    celestialHarmony: {
        'A': 'Ά', 'B': 'в', 'C': 'ζ', 'D': 'Ð', 'E': 'Έ', 'F': 'Ƒ', 'G': 'Ĝ', 'H': 'Ħ', 'I': 'Ί', 'J': 'ј',
        'K': 'К', 'L': 'Ł', 'M': 'Μ', 'N': 'Ň', 'O': 'Ό', 'P': 'Þ', 'Q': 'Q', 'R': 'Ŕ', 'S': 'Ş', 'T': 'Ť',
        'U': 'Ú', 'V': 'V', 'W': 'Ŵ', 'X': 'Χ', 'Y': 'Ý', 'Z': 'Ž',
        'a': 'α', 'b': 'в', 'c': 'c', 'd': 'đ', 'e': 'ε', 'f': 'ƒ', 'g': 'ģ', 'h': 'ħ', 'i': 'ί', 'j': 'ј',
        'k': 'ķ', 'l': 'ł', 'm': 'м', 'n': 'ń', 'o': 'ό', 'p': 'ρ', 'q': 'q', 'r': 'ŕ', 's': 'ş', 't': 'ţ',
        'u': 'ù', 'v': 'v', 'w': 'ŵ', 'x': 'x', 'y': 'ч', 'z': 'ž',
        '0': '⓪', '1': '➀', '2': '➁', '3': '➂', '4': '➃', '5': '➄', '6': '➅', '7': '➆', '8': '➇', '9': '➈'
    },
    etherealLuminescence: {
        'A': 'Ѧ', 'B': 'Ɓ', 'C': 'Ƈ', 'D': 'Ɗ', 'E': 'Ɛ', 'F': 'Ƒ', 'G': 'Ɠ', 'H': 'Ӈ', 'I': 'Ɩ', 'J': 'Ʝ',
        'K': 'Ƙ', 'L': 'Ƚ', 'M': 'Ӎ', 'N': 'Ӣ', 'O': 'Ơ', 'P': 'Ƥ', 'Q': 'Ɋ', 'R': 'Ʀ', 'S': 'Ƨ', 'T': 'Ƭ',
        'U': 'Ʋ', 'V': 'Ѵ', 'W': 'Ԝ', 'X': 'Ӿ', 'Y': 'Ƴ', 'Z': 'Ɀ',
        'a': 'ą', 'b': 'ɓ', 'c': 'ƈ', 'd': 'ɗ', 'e': 'ɛ', 'f': 'ƒ', 'g': 'ɠ', 'h': 'ɦ', 'i': 'ɩ', 'j': 'ʝ',
        'k': 'ƙ', 'l': 'ʅ', 'm': 'ɱ', 'n': 'ŋ', 'o': 'ơ', 'p': 'ƥ', 'q': 'ʠ', 'r': 'ཞ', 's': 'ʂ', 't': 'ƭ',
        'u': 'ų', 'v': 'ʋ', 'w': 'ω', 'x': 'ҳ', 'y': 'ყ', 'z': 'ʑ',
        '0': '໐', '1': '౹', '2': '߂', '3': '૩', '4': '৫', '5': 'Ƽ', '6': '੬', '7': '۷', '8': '୨', '9': '૭'
    },
    celestialWhisper: {
        'A': 'Ꭺ', 'B': 'Ᏸ', 'C': 'Ꮯ', 'D': 'Ꭰ', 'E': 'Ꭼ', 'F': 'Ꮄ', 'G': 'Ᏻ', 'H': 'Ᏼ', 'I': 'Ꭵ', 'J': 'Ꮰ',
        'K': 'Ꮶ', 'L': 'Ꮭ', 'M': 'Ꮇ', 'N': 'Ꮑ', 'O': 'Ꮎ', 'P': 'Ꮲ', 'Q': 'Ꭴ', 'R': 'Ꮢ', 'S': 'Ꮥ', 'T': 'Ꮦ',
        'U': 'Ꮼ', 'V': 'Ꮙ', 'W': 'Ꮗ', 'X': 'Ꮂ', 'Y': 'Ꮍ', 'Z': 'Ꮓ',
        'a': 'ꮧ', 'b': 'ꭷ', 'c': 'ꮯ', 'd': 'ꮄ', 'e': 'ꮛ', 'f': 'ꭶ', 'g': 'ꮆ', 'h': 'ꮒ', 'i': 'ꭵ', 'j': 'ꮽ',
        'k': 'ꮶ', 'l': 'ꮭ', 'm': 'ꮇ', 'n': 'ꮑ', 'o': 'ꮎ', 'p': 'ꮲ', 'q': 'ꭴ', 'r': 'ꮢ', 's': 'ꮥ', 't': 'ꮦ',
        'u': 'ꮼ', 'v': 'ꮙ', 'w': 'ꮗ', 'x': 'ꮂ', 'y': 'ꮍ', 'z': 'ꮓ',
        '0': '᠐', '1': '᠑', '2': '᠒', '3': '᠓', '4': '᠔', '5': '᠕', '6': '᠖', '7': '᠗', '8': '᠘', '9': '᠙'
    },
    mysticGlyph: {
        'A': 'ꍏ', 'B': 'ꌃ', 'C': 'ꉓ', 'D': 'ꀸ', 'E': 'ꂅ', 'F': 'ꎇ', 'G': 'ꁅ', 'H': 'ꃅ', 'I': 'ꀤ', 'J': 'ꀭ',
        'K': 'ꀘ', 'L': '꒒', 'M': 'ꎭ', 'N': 'ꈤ', 'O': 'ꂦ', 'P': 'ꉣ', 'Q': 'ꆰ', 'R': 'ꋪ', 'S': 'ꌗ', 'T': '꓄',
        'U': 'ꀎ', 'V': 'ᐯ', 'W': 'ꅏ', 'X': 'ꊼ', 'Y': 'ꌩ', 'Z': 'ꁴ',
        'a': 'ꋫ', 'b': 'ꃳ', 'c': 'ꏸ', 'd': 'ꁕ', 'e': 'ꍟ', 'f': 'ꄘ', 'g': 'ꁍ', 'h': 'ꑛ', 'i': 'ꂑ', 'j': 'ꀋ',
        'k': 'ꀗ', 'l': 'ꋖ', 'm': 'ꁒ', 'n': 'ꁹ', 'o': 'ꆂ', 'p': 'ꉣ', 'q': 'ꁸ', 'r': 'ꋪ', 's': 'ꇙ', 't': 'ꋖ',
        'u': 'ꐇ', 'v': 'ꏝ', 'w': 'ꅐ', 'x': 'ꉧ', 'y': 'ꌦ', 'z': 'ꁴ',
        '0': '០', '1': '១', '2': '២', '3': '៣', '4': '៤', '5': '៥', '6': '៦', '7': '៧', '8': '៨', '9': '៩'
    },
    aetherealRunes: {
        'A': 'ᚨ', 'B': 'ᛒ', 'C': 'ᚳ', 'D': 'ᛞ', 'E': 'ᛖ', 'F': 'ᚠ', 'G': 'ᚷ', 'H': 'ᚺ', 'I': 'ᛁ', 'J': 'ᛃ',
        'K': 'ᚲ', 'L': 'ᛚ', 'M': 'ᛗ', 'N': 'ᚾ', 'O': 'ᛟ', 'P': 'ᛈ', 'Q': 'ᛩ', 'R': 'ᚱ', 'S': 'ᛊ', 'T': 'ᛏ',
        'U': 'ᚢ', 'V': 'ᚹ', 'W': 'ᚹ', 'X': 'ᛪ', 'Y': 'ᚤ', 'Z': 'ᛉ',
        'a': 'ᛆ', 'b': 'ᛒ', 'c': 'ᚴ', 'd': 'ᚦ', 'e': 'ᛂ', 'f': 'ᚠ', 'g': 'ᚵ', 'h': 'ᚻ', 'i': 'ᛁ', 'j': 'ᛃ',
        'k': 'ᚴ', 'l': 'ᛚ', 'm': 'ᛘ', 'n': 'ᚿ', 'o': 'ᚮ', 'p': 'ᛔ', 'q': 'ᛯ', 'r': 'ᚱ', 's': 'ᛋ', 't': 'ᛐ',
        'u': 'ᚢ', 'v': 'ᚡ', 'w': 'ᚥ', 'x': 'ᛪ', 'y': 'ᚤ', 'z': 'ᛎ',
        '0': '᛭', '1': '᛫', '2': '᛬', '3': '᛭᛫', '4': '᛭᛬', '5': '᛭᛭', '6': '᛫᛬', '7': '᛫᛭', '8': '᛬᛭', '9': '᛭᛬᛫'
    },
    boldRomeScript: {
        'A': '𝚮', 'B': '𝚫', 'C': '𝐂', 'D': '𝚷', 'E': '𝐄', 'F': '𝚽', 'G': '𝚶', 'H': '𝚷',
        'I': '𝐈', 'J': '𝚹', 'K': '𝚺', 'L': '𝚻', 'M': '𝚼', 'N': '𝚽', 'O': '𝚾', 'P': '𝚿',
        'Q': '𝛀', 'R': '𝛲', 'S': '𝛴', 'T': '𝛵', 'U': '𝛶', 'V': '𝛷', 'W': '𝛸', 'X': '𝛸',
        'Y': '𝛼', 'Z': '𝛼', 'a': '𝛼', 'b': '𝛽', 'c': '𝛹', 'd': '𝛿', 'e': '𝜀', 'f': '𝜁',
        'g': '𝜂', 'h': '𝜒', 'i': '𝜄', 'j': '𝜅', 'k': '𝜆', 'l': '𝜇', 'm': '𝜈', 'n': '𝜉',
        'o': '𝜊', 'p': '𝜋', 'q': '𝜌', 'r': '𝜍', 's': '𝜎', 't': '𝜏', 'u': '𝜐', 'v': '𝜑',
        'w': '𝜔', 'x': '𝜒', 'y': '𝜕', 'z': '𝜖',
        '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒',
        '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗'
      },
      boldSerif: {
        'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆',
        'H': '𝐇', 'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍',
        'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔',
        'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙', 'a': '𝐚', 'b': '𝐛',
        'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢',
        'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩',
        'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭', 'u': '𝐮', 'v': '𝐯', 'w': '𝐰',
        'x': '𝐱', 'y': '𝐲', 'z': '𝐳'
      },
      smallBoldScript: {
        'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ꜰ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ',
        'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'ꞯ', 'R': 'ʀ', 'S': 's', 'T': 'ᴛ',
        'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ',
        'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ꜰ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ',
        'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ꞯ', 'r': 'ʀ', 's': 's', 't': 'ᴛ',
        'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ'
    },
  };
  
  module.exports = fonts;