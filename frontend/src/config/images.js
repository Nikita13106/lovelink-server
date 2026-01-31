const CLOUD = "dvekbstfc";

export const cdn = (path) =>
  `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto/${path}`;

// Helper function for resizing + lazy-loading support
export const cloudImage = (url, { width, height } = {}) => {
  if (!url) return "";
  const parts = url.split("/upload/");
  let transformations = [];

  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);

  // Ensure auto format and quality
  transformations.push("f_auto", "q_auto");

  return `${parts[0]}/upload/${transformations.join(",")}/${parts[1]}`;
};

// All images (pfps, roles, banners)
export const IMAGES = {
  pfps: {
    reaper:
      "https://res.cloudinary.com/dvekbstfc/image/upload/v1769791346/reaper_o3dpi0.jpg",
    manseerat:
      "https://res.cloudinary.com/dvekbstfc/image/upload/v1769791344/manseerat_l5dn7f.jpg",
    sloke:
      "https://res.cloudinary.com/dvekbstfc/image/upload/v1769791352/sloke_vczwm4.png",
    devdas:
      "https://res.cloudinary.com/dvekbstfc/image/upload/v1769791293/devdas_yabvht.jpg",
    kittu:
      "https://res.cloudinary.com/dvekbstfc/image/upload/v1769791294/kittu_kxzyov.jpg",
    grace:
      "https://res.cloudinary.com/dvekbstfc/image/upload/v1769791294/grace_czcadf.jpg",
    tanishq:
      "https://res.cloudinary.com/dvekbstfc/image/upload/v1769791352/tanishq_pt7o2z.jpg",
    shadow:
      "https://res.cloudinary.com/dvekbstfc/image/upload/v1769791347/shadow_ze37av.jpg",
  },

  roles: {
    founder:
      "https://res.cloudinary.com/dvekbstfc/image/upload/v1769791224/Founder_vtjcoj.png",
    owners:
      "https://res.cloudinary.com/dvekbstfc/image/upload/v1769791225/Owners_iqw0vp.png",
    girlOwners:
      "https://res.cloudinary.com/dvekbstfc/image/upload/v1769791224/GirlOwners_tzfhpv.png",
    coOwners:
      "https://res.cloudinary.com/dvekbstfc/image/upload/v1769791223/CoOwners_dos7hu.png",
  },

  banners: {
    banner1:
      "https://res.cloudinary.com/dvekbstfc/image/upload/v1769791258/banner1_so7szt.jpg",
    banner2:
      "https://res.cloudinary.com/dvekbstfc/image/upload/v1769791259/banner2_d5l9or.jpg",
    banner3:
      "https://res.cloudinary.com/dvekbstfc/image/upload/v1769791260/banner3_j5ae8w.jpg",
    banner4:
      "https://res.cloudinary.com/dvekbstfc/image/upload/v1769791261/banner4_jm9xm4.jpg",
    banner5:
      "https://res.cloudinary.com/dvekbstfc/video/upload/v1769791264/banner5_ejk5k7.mp4",
    banner6:
      "https://res.cloudinary.com/dvekbstfc/image/upload/v1769791271/chuku_wo3emi.webp",
    banner7:
      "https://res.cloudinary.com/dvekbstfc/image/upload/v1769791264/banner6_exmglz.jpg",
    banner8:
      "https://res.cloudinary.com/dvekbstfc/image/upload/v1769791265/banner7_luzj29.jpg",
  },
  rules: {
    cat: "https://res.cloudinary.com/dvekbstfc/image/upload/v1769791101/rules_aujvda.png",
  },
  homepage: {
    logo: "https://res.cloudinary.com/dvekbstfc/image/upload/v1769791107/Logo_rhece4.gif",
    banner:
      "https://res.cloudinary.com/dvekbstfc/image/upload/v1769791101/banner_asdhfn.jpg",
  },
};
