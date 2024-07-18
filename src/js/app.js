export default function lifeSort(options) {
  options.sort((a, b) => b.health - a.health);
  return options;
}
