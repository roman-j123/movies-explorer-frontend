const filmsArr = [
  {
    id: 0,
    name: '33 слова о дизайне',
    time: '1ч 47м',
    pic: 'https://images.unsplash.com/photo-1563197280-daaeb01b1f34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1046&q=80',
    short: true,
    liked: false
  },
  {
    id: 1,
    name: '33 слова о дизайне',
    time: '1ч 47м',
    pic: 'https://images.unsplash.com/photo-1627638527881-c89a49e0fdbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
    short: false,
    liked: false
  },
  {
    id: 2,
    name: '33 слова о дизайне',
    time: '1ч 47м',
    pic: 'https://images.unsplash.com/photo-1627638675247-cad81f819211?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
    short: true,
    liked: false
  },
  {
    id: 3,
    name: '33 слова о дизайне',
    time: '1ч 47м',
    pic: 'https://images.unsplash.com/photo-1627652303022-d366e3d4ef94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=690&q=80',
    short: false,
    liked: true
  },
  {
    id: 4,
    name: '33 слова о дизайне',
    time: '1ч 47м',
    pic: 'https://images.unsplash.com/photo-1627455288109-6dd216109b7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1054&q=80',
    short: false,
    liked: true
  },
  {
    id: 5,
    name: '33 слова о дизайне',
    time: '1ч 47м',
    pic: 'https://images.unsplash.com/photo-1627571828353-5e8490834c01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    short: false,
    liked: false
  },
  {
    id: 6,
    name: '33 слова о дизайне',
    time: '1ч 47м',
    pic: 'https://images.unsplash.com/photo-1563197280-daaeb01b1f34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1046&q=80',
    short: false,
    liked: false
  },
  {
    id: 7,
    name: '33 слова о дизайне',
    time: '1ч 47м',
    pic: 'https://images.unsplash.com/photo-1627638527881-c89a49e0fdbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
    short: false,
    liked: false
  },
  {
    id: 8,
    name: '33 слова о дизайне',
    time: '1ч 47м',
    pic: 'https://images.unsplash.com/photo-1627638675247-cad81f819211?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
    short: false,
    liked: true
  },
  {
    id: 9,
    name: '33 слова о дизайне',
    time: '1ч 47м',
    pic: 'https://images.unsplash.com/photo-1627652303022-d366e3d4ef94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=690&q=80',
    short: false,
    liked: false
  },
  {
    id: 10,
    name: '33 слова о дизайне',
    time: '1ч 47м',
    pic: 'https://images.unsplash.com/photo-1627455288109-6dd216109b7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1054&q=80',
    short: false,
    liked: false
  },
  {
    id: 11,
    name: '33 слова о дизайне',
    time: '1ч 47м',
    pic: 'https://images.unsplash.com/photo-1627571828353-5e8490834c01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    short: false,
    liked: true
  },
  {
    id: 12,
    name: '33 слова о дизайне',
    time: '1ч 47м',
    pic: 'https://images.unsplash.com/photo-1563197280-daaeb01b1f34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1046&q=80',
    short: false,
    liked: false
  },
  {
    id: 13,
    name: '33 слова о дизайне',
    time: '1ч 47м',
    pic: 'https://images.unsplash.com/photo-1627638527881-c89a49e0fdbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
    short: false,
    liked: false
  },
  {
    id: 14,
    name: '33 слова о дизайне',
    time: '1ч 47м',
    pic: 'https://images.unsplash.com/photo-1627638675247-cad81f819211?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
    short: false,
    liked: false
  },
  {
    id: 15,
    name: '33 слова о дизайне',
    time: '1ч 47м',
    pic: 'https://images.unsplash.com/photo-1627652303022-d366e3d4ef94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=690&q=80',
    short: true,
    liked: false
  },
  {
    id: 16,
    name: '33 слова о дизайне',
    time: '1ч 47м',
    pic: 'https://images.unsplash.com/photo-1627455288109-6dd216109b7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1054&q=80',
    short: false,
    liked: false
  },
  {
    id: 17,
    name: '33 слова о дизайне',
    time: '1ч 47м',
    pic: 'https://images.unsplash.com/photo-1627571828353-5e8490834c01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    short: false,
    liked: true
  }
]
export default filmsArr;