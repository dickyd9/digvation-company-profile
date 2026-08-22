export const socialConfig = {
  linkedin: '',
  instagram: '',
  youtube: '',
} as const;

export const socialProfiles = Object.values(socialConfig).filter(Boolean);
