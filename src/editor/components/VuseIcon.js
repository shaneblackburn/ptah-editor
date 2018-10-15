const icons = {
  plus: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z',
  tic: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z',
  sort: 'M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z',
  link: 'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
  palettes: 'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
  close: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
  bold: 'M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z',
  italic: 'M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z',
  underline: 'M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z',
  center: 'M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z',
  left: 'M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z',
  right: 'M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z',
  trash: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z',
  align: 'M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z',
  textStyle: 'M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm12-2H7v-2H5V7h2V5h10v2h2v10h-2v2zm4 2h-2v-2h2v2zM19 5V3h2v2h-2zm-5.27 9h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63l-.74-2zm-3.04-1.26h2.61L12 8.91l-1.31 3.83z',
  section: 'M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z',
  arrowDown: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z',
  arrowRight: 'M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z',
  arrowLeft: 'M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z',
  mobile: 'M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z',
  tablet: 'M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z',
  laptop: 'M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z',
  monitor: 'M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z',
  download: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z',
  eye: 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
  undo: 'M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z',
  upload: {
    sizes: '0 0 32 32',
    content: 'M28 16h-5l-7 7-7-7h-5l-4 8v2h32v-2l-4-8zM0 28h32v2h-32v-2zM18 10v-8h-4v8h-7l9 9 9-9h-7z'
  },
  cog: {
    sizes: '0 0 512 512',
    content: 'M444.788 291.1l42.616 24.599c4.867 2.809 7.126 8.618 5.459 13.985-11.07 35.642-29.97 67.842-54.689 94.586a12.016 12.016 0 0 1-14.832 2.254l-42.584-24.595a191.577 191.577 0 0 1-60.759 35.13v49.182a12.01 12.01 0 0 1-9.377 11.718c-34.956 7.85-72.499 8.256-109.219.007-5.49-1.233-9.403-6.096-9.403-11.723v-49.184a191.555 191.555 0 0 1-60.759-35.13l-42.584 24.595a12.016 12.016 0 0 1-14.832-2.254c-24.718-26.744-43.619-58.944-54.689-94.586-1.667-5.366.592-11.175 5.459-13.985L67.212 291.1a193.48 193.48 0 0 1 0-70.199l-42.616-24.599c-4.867-2.809-7.126-8.618-5.459-13.985 11.07-35.642 29.97-67.842 54.689-94.586a12.016 12.016 0 0 1 14.832-2.254l42.584 24.595a191.577 191.577 0 0 1 60.759-35.13V25.759a12.01 12.01 0 0 1 9.377-11.718c34.956-7.85 72.499-8.256 109.219-.007 5.49 1.233 9.403 6.096 9.403 11.723v49.184a191.555 191.555 0 0 1 60.759 35.13l42.584-24.595a12.016 12.016 0 0 1 14.832 2.254c24.718 26.744 43.619 58.944 54.689 94.586 1.667 5.366-.592 11.175-5.459 13.985L444.788 220.9a193.485 193.485 0 0 1 0 70.2zM336 256c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80z'
  },
  bar: {
    sizes: '0 0 448 512',
    content: 'M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'
  },
  check: {
    sizes: '0 0 512 512',
    content: 'M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z'
  },
  pic: {
    sizes: '0 0 30 28',
    content: 'M10 9c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM26 15v7h-22v-3l5-5 2.5 2.5 8-8zM27.5 4h-25c-0.266 0-0.5 0.234-0.5 0.5v19c0 0.266 0.234 0.5 0.5 0.5h25c0.266 0 0.5-0.234 0.5-0.5v-19c0-0.266-0.234-0.5-0.5-0.5zM30 4.5v19c0 1.375-1.125 2.5-2.5 2.5h-25c-1.375 0-2.5-1.125-2.5-2.5v-19c0-1.375 1.125-2.5 2.5-2.5h25c1.375 0 2.5 1.125 2.5 2.5z'
  },
  settings: {
    sizes: '0 0 30 28',
    content: 'M10 9c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM26 15v7h-22v-3l5-5 2.5 2.5 8-8zM27.5 4h-25c-0.266 0-0.5 0.234-0.5 0.5v19c0 0.266 0.234 0.5 0.5 0.5h25c0.266 0 0.5-0.234 0.5-0.5v-19c0-0.266-0.234-0.5-0.5-0.5zM30 4.5v19c0 1.375-1.125 2.5-2.5 2.5h-25c-1.375 0-2.5-1.125-2.5-2.5v-19c0-1.375 1.125-2.5 2.5-2.5h25c1.375 0 2.5 1.125 2.5 2.5z'
  },
  reload: {
    sizes: '0 0 32 32',
    content: 'M8.013 22.033v-7.972h3.932l-5.902-6.892-6.026 6.893h3.947v11.896h17.468l-3.923-3.924h-9.496zM28.036 19.001v-11.958h-17.531l3.986 3.985h9.496v7.973h-3.932l5.901 6.893 6.026-6.893h-3.946z'
  },
  font: {
    sizes: '0 0 32 32',
    content: 'M24.987 0.506c-2.829 0-4.644-0.506-7.558-0.506-9.415 0-13.806 5.362-13.806 10.809 0 3.209 1.52 4.264 4.518 4.264-0.211-0.464-0.591-0.971-0.591-3.251 0-6.375 2.406-8.233 5.489-8.36 0 0-2.529 24.793-9.868 27.767v0.771h9.894l3.376-16h6.183l1.377-4h-6.716l1.623-7.693c1.858 0.38 3.673 0.76 5.235 0.76 1.942 0 3.715-0.591 4.686-5.066-1.182 0.38-2.449 0.506-3.842 0.506z'
  },
  fontSize: {
    sizes: '0 0 32 32',
    content: 'M2 16h12v4h-4v12h-4v-12h-4zM30 8h-7.867v24h-4.266v-24h-7.867v-4h20z'
  },
  fillet: {
    sizes: '0 0 24 24',
    content: 'M5.672 19.734l1.406-1.406c1.125 0.844 2.484 1.406 3.938 1.594v2.016c-2.016-0.188-3.844-0.984-5.344-2.203zM12.984 19.922c1.453-0.188 2.813-0.75 3.891-1.594l1.453 1.406c-1.5 1.219-3.328 2.016-5.344 2.203v-2.016zM18.328 16.922c0.844-1.125 1.406-2.438 1.594-3.891h2.016c-0.188 2.016-0.984 3.797-2.203 5.297zM15 12c0 1.641-1.359 3-3 3s-3-1.359-3-3 1.359-3 3-3 3 1.359 3 3zM4.078 12.984c0.188 1.453 0.75 2.813 1.594 3.891l-1.406 1.453c-1.219-1.5-2.016-3.328-2.203-5.344h2.016zM5.672 7.078c-0.844 1.125-1.406 2.484-1.594 3.938h-2.016c0.188-2.016 0.984-3.844 2.203-5.344zM19.922 11.016c-0.188-1.453-0.75-2.813-1.594-3.938l1.406-1.406c1.219 1.5 2.016 3.328 2.203 5.344h-2.016zM18.328 4.266l-1.406 1.406c-1.125-0.844-2.484-1.406-3.938-1.594v-2.016c2.016 0.188 3.844 0.984 5.344 2.203zM11.016 4.078c-1.453 0.188-2.813 0.75-3.938 1.594l-1.406-1.406c1.5-1.219 3.328-2.016 5.344-2.203v2.016z'
  },
  floppy: {
    sizes: '0 0 24 28',
    content: 'M6 24h12v-6h-12v6zM20 24h2v-14c0-0.297-0.266-0.938-0.469-1.141l-4.391-4.391c-0.219-0.219-0.828-0.469-1.141-0.469v6.5c0 0.828-0.672 1.5-1.5 1.5h-9c-0.828 0-1.5-0.672-1.5-1.5v-6.5h-2v20h2v-6.5c0-0.828 0.672-1.5 1.5-1.5h13c0.828 0 1.5 0.672 1.5 1.5v6.5zM14 9.5v-5c0-0.266-0.234-0.5-0.5-0.5h-3c-0.266 0-0.5 0.234-0.5 0.5v5c0 0.266 0.234 0.5 0.5 0.5h3c0.266 0 0.5-0.234 0.5-0.5zM24 10v14.5c0 0.828-0.672 1.5-1.5 1.5h-21c-0.828 0-1.5-0.672-1.5-1.5v-21c0-0.828 0.672-1.5 1.5-1.5h14.5c0.828 0 1.969 0.469 2.562 1.062l4.375 4.375c0.594 0.594 1.062 1.734 1.062 2.562z'
  },
  back: {
    sizes: '0 0 20 20',
    content: 'M19 7v6c0 1.103-0.896 2-2 2h-14v-3h13v-4h-11v2l-4-3.5 4-3.5v2h12c1.104 0 2 0.896 2 2z'
  }
}

export default {
  functional: true,
  props: {
    name: {
      type: String,
      required: true,
      validator: (val) => {
        if (!(val in icons) && process.env.NODE_ENV !== 'production') {
          console.warn(`Invalid icon name "${val}"`)
          return false
        }

        return true
      }
    }
  },
  render (h, { props }) {
    let dAttr = icons[props.name]
    let viewBoxAttr = '0 0 24 24'
    let addClass = ''

    if (typeof icons[props.name] === 'object') {
      if (icons[props.name].hasOwnProperty('content')) {
        dAttr = icons[props.name]['content']
      }

      if (icons[props.name].hasOwnProperty('sizes')) {
        viewBoxAttr = icons[props.name]['sizes']
      }

      addClass = props.name
    }

    const path = h('path', {
      attrs: {
        d: dAttr
      }
    })

    return h(
      'svg',
      {
        attrs: {
          version: '1.1',
          xmlns: 'http://www.w3.org/2000/svg',
          class: 'vuse-icon' + ' vuse-icon_'+ addClass,
          viewBox: viewBoxAttr
        }
      },
      [path]
    )
  }
}
