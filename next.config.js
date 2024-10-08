/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
    'react-icons/?(((\\w*)?/?)*)': {
      transform: 'react-icons/{{ matches.[1] }}/{{member}}',
    },
  },
}

export default nextConfig;