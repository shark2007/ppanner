import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  PlusCircle, Star, Clock, ChefHat, MessageCircle, 
  Upload, X, Check, Filter, Sparkles, Image as ImageIcon, Heart
} from 'lucide-react';
import { INITIAL_RECIPES } from '../data/recipes';
import { BRAND } from '../data/brand';

export default function RecipesPage() {
  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem('purely_paneer_community_recipes');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_RECIPES;
      }
    }
    return INITIAL_RECIPES;
  });

  const [activeCategory, setActiveCategory] = useState('ALL');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [ratingModalRecipe, setRatingModalRecipe] = useState(null);
  const [userRating, setUserRating] = useState(5);
  const [ratingComment, setRatingComment] = useState('');
  const [successToast, setSuccessToast] = useState('');

  // Form state for adding recipe
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('Chennai');
  const [newPaneerType, setNewPaneerType] = useState('Fresh Paneer');
  const [newTime, setNewTime] = useState('20 mins');
  const [newDifficulty, setNewDifficulty] = useState('Easy');
  const [newCategory, setNewCategory] = useState('Party Starters');
  const [newDesc, setNewDesc] = useState('');
  const [newIngredients, setNewIngredients] = useState('');
  const [newSteps, setNewSteps] = useState('');
  const [newImagePreview, setNewImagePreview] = useState('/images/hero_paneer.jpg');

  // Save to localStorage when recipes change
  useEffect(() => {
    localStorage.setItem('purely_paneer_community_recipes', JSON.stringify(recipes));
  }, [recipes]);

  // Handle local image file upload
  const handleImageFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddRecipeSubmit = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newAuthor.trim()) return;

    const ingList = newIngredients
      .split('\n')
      .map((i) => i.trim())
      .filter(Boolean);

    const stepList = newSteps
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);

    const newRecipeObj = {
      id: `recipe-custom-${Date.now()}`,
      title: newTitle.trim(),
      author: newAuthor.trim(),
      location: newLocation.trim() || 'Chennai',
      paneerType: newPaneerType,
      paneerSlug: newPaneerType.toLowerCase().replace(/ /g, '-'),
      time: newTime || '15 mins',
      difficulty: newDifficulty,
      category: newCategory,
      rating: 5.0,
      ratingCount: 1,
      image: newImagePreview || '/images/hero_paneer.jpg',
      description: newDesc.trim() || 'Handmade fresh pure paneer dish.',
      ingredients: ingList.length ? ingList : ['250g Purely Paneer', 'Fresh herbs & spices', 'Ghee or cold-pressed oil'],
      steps: stepList.length ? stepList : ['Cut paneer into cubes.', 'Toss with your favorite seasonings.', 'Cook gently and serve warm.']
    };

    setRecipes([newRecipeObj, ...recipes]);
    setIsAddModalOpen(false);

    // Reset fields
    setNewTitle('');
    setNewAuthor('');
    setNewDesc('');
    setNewIngredients('');
    setNewSteps('');
    setNewImagePreview('/images/hero_paneer.jpg');

    setSuccessToast('🎉 Your recipe was added successfully to Purely Paneer community!');
    setTimeout(() => setSuccessToast(''), 4000);
  };

  const handleRatingSubmit = (e) => {
    e.preventDefault();
    if (!ratingModalRecipe) return;

    setRecipes((prev) =>
      prev.map((r) => {
        if (r.id === ratingModalRecipe.id) {
          const currentTotal = (r.rating || 5) * (r.ratingCount || 1);
          const newCount = (r.ratingCount || 1) + 1;
          const newAvg = Number(((currentTotal + userRating) / newCount).toFixed(1));
          return {
            ...r,
            rating: newAvg,
            ratingCount: newCount
          };
        }
        return r;
      })
    );

    setRatingModalRecipe(null);
    setRatingComment('');
    setSuccessToast(`⭐ Thank you! You rated ${userRating} stars.`);
    setTimeout(() => setSuccessToast(''), 4000);
  };

  const filteredRecipes = activeCategory === 'ALL'
    ? recipes
    : recipes.filter((r) => r.category === activeCategory);

  const categories = [
    { id: 'ALL', label: 'All Recipes' },
    { id: 'Party Starters', label: 'Party Starters' },
    { id: 'Quick 15-Min', label: 'Quick 15-Min' },
    { id: 'High Protein', label: 'High Protein' },
    { id: 'Desserts', label: 'Desserts' },
  ];

  return (
    <main className="bg-[#FAF7F0] min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toast alert */}
        {successToast && (
          <div className="fixed top-20 right-5 z-50 bg-[#142E20] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-[#3C6E52] animate-bounce">
            <Check className="w-5 h-5 text-[#539E72]" />
            <span className="text-xs sm:text-sm font-semibold">{successToast}</span>
          </div>
        )}

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#142E20] text-[#FFFDF9] mb-3">
              <ChefHat className="w-3.5 h-3.5 text-[#539E72]" />
              <span>COMMUNITY & CHEF KITCHEN</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-extrabold text-[#142E20] tracking-tight">
              PANEER RECIPES
            </h1>

            <p className="font-serif italic text-xl sm:text-2xl text-[#395644] mt-2">
              Cook honest, delicious food with 100% pure paneer.
            </p>

            <p className="text-sm text-[#4E5F55] mt-3">
              Explore tested recipes, share your own culinary creations, and rate your favorite dishes.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto">
            <Link
              to="/admin"
              className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-[#F3ECE0] text-[#142E20] border border-[#DDD3C2] px-4 py-3.5 rounded-2xl text-xs font-bold tracking-wider transition-all shadow-2xs"
            >
              <span>⚙️ Admin Studio</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-[#142E20] hover:bg-[#1E4330] text-[#FFFDF9] px-5 sm:px-6 py-3.5 rounded-2xl text-xs font-bold tracking-wider transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <PlusCircle className="w-4 h-4 text-[#539E72]" />
              <span>SUBMIT RECIPE</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-[#E8DFC2] mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs px-4 py-2 rounded-xl font-medium tracking-wide transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#142E20] text-white shadow-xs font-semibold'
                  : 'bg-white text-[#3E4F44] border border-[#DDD3C2] hover:border-[#142E20]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => {
            const orderWhatsAppUrl = `${BRAND.whatsappBaseUrl}?text=${encodeURIComponent(
              `Hi Purely Paneer! I want to prepare the recipe: "${recipe.title}". Please share availability for ${recipe.paneerType} in Chennai.`
            )}`;

            return (
              <div
                key={recipe.id}
                className="bg-[#FCFAF7] border border-[#E1D6C5] hover:border-[#142E20]/40 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image & Badges */}
                <div className="relative aspect-16/10 overflow-hidden bg-[#EFE8DC]">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#142E20]/90 text-white backdrop-blur-xs">
                      {recipe.paneerType}
                    </span>
                    <span className="text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#FAF7F0] text-[#1E4330] shadow-xs">
                      {recipe.category}
                    </span>
                  </div>

                  {/* Interactive Star Pill Button */}
                  <button
                    type="button"
                    onClick={() => setRatingModalRecipe(recipe)}
                    className="absolute bottom-3 right-3 bg-[#FCFAF7]/95 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5 text-xs font-bold text-[#142E20] hover:bg-white transition-colors"
                    title="Click to rate this recipe"
                  >
                    <Star className="w-3.5 h-3.5 fill-[#E28C37] text-[#E28C37]" />
                    <span>{recipe.rating}</span>
                    <span className="text-[10px] text-[#6E8074] font-normal">({recipe.ratingCount})</span>
                    <span className="text-[10px] text-[#2F6546] underline ml-1 font-semibold">Rate</span>
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                  <div>
                    {/* Meta info */}
                    <div className="flex items-center justify-between text-xs text-[#5D6F63] mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {recipe.time}
                      </span>
                      <span>By <strong>{recipe.author}</strong> ({recipe.location})</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#142E20] group-hover:text-[#285A3C] transition-colors leading-snug">
                      {recipe.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#465A4E] mt-2 line-clamp-2 leading-relaxed">
                      {recipe.description}
                    </p>

                    {/* Ingredients summary */}
                    <div className="mt-4 pt-4 border-t border-[#EDE4D5]">
                      <span className="text-[10px] font-mono tracking-wider uppercase font-bold text-[#2A5941] block mb-1.5">
                        KEY INGREDIENTS
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {recipe.ingredients.slice(0, 3).map((ing, i) => (
                          <span
                            key={i}
                            className="text-[11px] bg-[#F1E9DE] text-[#203126] px-2 py-0.5 rounded-md"
                          >
                            {ing}
                          </span>
                        ))}
                        {recipe.ingredients.length > 3 && (
                          <span className="text-[11px] text-[#697C6F] px-1 py-0.5">
                            +{recipe.ingredients.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions: Rate + Order Paneer for this recipe */}
                  <div className="pt-4 border-t border-[#EDE4D5] flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setRatingModalRecipe(recipe)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#FAF7F0] hover:bg-[#EFE8DC] text-[#142E20] border border-[#DDD3C2] py-2.5 px-3 rounded-xl text-xs font-semibold tracking-wider transition-colors"
                    >
                      <Star className="w-3.5 h-3.5 text-[#E28C37]" />
                      <span>RATE RECIPE</span>
                    </button>

                    <a
                      href={orderWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#142E20] hover:bg-[#1E4330] text-white py-2.5 px-3 rounded-xl text-xs font-bold tracking-wider transition-all shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#539E72] fill-current" />
                      <span>ORDER PANEER</span>
                    </a>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Modal 1: Submit Your Recipe */}
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
            <div className="bg-[#FCFAF7] border border-[#DDD3C2] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto my-auto">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#EDE4D5] mb-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#142E20]">
                    Share Your Paneer Recipe
                  </h3>
                  <p className="text-xs text-[#526458]">
                    Showcase your culinary dish to the Purely Paneer Chennai community!
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="p-1.5 rounded-full hover:bg-[#EFE7DA] text-[#142E20]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAddRecipeSubmit} className="space-y-4">
                
                {/* Title & Author */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold tracking-wider uppercase text-[#142E20] mb-1">
                      Recipe Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder="e.g. Garlic Butter Paneer Bhurji"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#CFC5B4] bg-white text-xs text-[#142E20] focus:ring-1 focus:ring-[#142E20] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-wider uppercase text-[#142E20] mb-1">
                      Your Name / Chef Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      placeholder="e.g. Kavitha R."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#CFC5B4] bg-white text-xs text-[#142E20] focus:ring-1 focus:ring-[#142E20] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Location & Paneer Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold tracking-wider uppercase text-[#142E20] mb-1">
                      Location in Chennai
                    </label>
                    <input
                      type="text"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      placeholder="e.g. Mogappair East, Anna Nagar"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#CFC5B4] bg-white text-xs text-[#142E20] focus:ring-1 focus:ring-[#142E20] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-wider uppercase text-[#142E20] mb-1">
                      Purely Paneer Used
                    </label>
                    <select
                      value={newPaneerType}
                      onChange={(e) => setNewPaneerType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#CFC5B4] bg-white text-xs text-[#142E20] focus:ring-1 focus:ring-[#142E20] focus:outline-none"
                    >
                      <option value="Fresh Paneer">Classic Fresh Paneer</option>
                      <option value="Hariyali Paneer">Hariyali Paneer</option>
                      <option value="Peri Peri Paneer">Peri Peri Paneer</option>
                      <option value="Paneer Chocolate Protein Dessert">Chocolate Protein Dessert</option>
                    </select>
                  </div>
                </div>

                {/* Time & Category */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold tracking-wider uppercase text-[#142E20] mb-1">
                      Cook Time
                    </label>
                    <input
                      type="text"
                      value={newTime}
                      onChange={(e) => setNewTime(e.target.value)}
                      placeholder="e.g. 15 mins"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#CFC5B4] bg-white text-xs text-[#142E20] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-wider uppercase text-[#142E20] mb-1">
                      Difficulty
                    </label>
                    <select
                      value={newDifficulty}
                      onChange={(e) => setNewDifficulty(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#CFC5B4] bg-white text-xs text-[#142E20] focus:outline-none"
                    >
                      <option value="Easy">Easy</option>
                      <option value="Quick">Quick</option>
                      <option value="Medium">Medium</option>
                      <option value="Chef Level">Chef Level</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-wider uppercase text-[#142E20] mb-1">
                      Category
                    </label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#CFC5B4] bg-white text-xs text-[#142E20] focus:outline-none"
                    >
                      <option value="Party Starters">Party Starters</option>
                      <option value="Quick 15-Min">Quick 15-Min</option>
                      <option value="High Protein">High Protein</option>
                      <option value="Desserts">Desserts</option>
                    </select>
                  </div>
                </div>

                {/* Image Upload & Presets */}
                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase text-[#142E20] mb-1">
                    Dish Photo (Upload File or Choose Preset)
                  </label>
                  <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-3.5 rounded-2xl border border-[#CFC5B4]">
                    <div className="w-20 h-20 rounded-xl overflow-hidden border bg-stone-100 shrink-0">
                      <img src={newImagePreview} alt="Preview" className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 space-y-2">
                      <label className="cursor-pointer inline-flex items-center gap-2 bg-[#142E20] text-white px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-[#1E4330] transition-colors">
                        <Upload className="w-3.5 h-3.5" />
                        <span>Upload photo from device</span>
                        <input type="file" accept="image/*" onChange={handleImageFileChange} className="hidden" />
                      </label>

                      <div className="flex items-center gap-2 text-[10px] text-[#697C6F]">
                        <span>Presets:</span>
                        <button type="button" onClick={() => setNewImagePreview('/images/lifestyle_tikka.jpg')} className="underline">Tikka</button>
                        <span>•</span>
                        <button type="button" onClick={() => setNewImagePreview('/images/hariyali_paneer.jpg')} className="underline">Hariyali</button>
                        <span>•</span>
                        <button type="button" onClick={() => setNewImagePreview('/images/peri_peri_paneer.jpg')} className="underline">Peri Peri</button>
                        <span>•</span>
                        <button type="button" onClick={() => setNewImagePreview('/images/chocolate_protein_dessert.jpg')} className="underline">Chocolate</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Short Description */}
                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase text-[#142E20] mb-1">
                    Short Description
                  </label>
                  <input
                    type="text"
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    placeholder="e.g. Sizzling golden paneer cubes sautéed with crushed garlic and fresh cilantro."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#CFC5B4] bg-white text-xs text-[#142E20] focus:outline-none"
                  />
                </div>

                {/* Ingredients & Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold tracking-wider uppercase text-[#142E20] mb-1">
                      Ingredients (One per line)
                    </label>
                    <textarea
                      rows={3}
                      value={newIngredients}
                      onChange={(e) => setNewIngredients(e.target.value)}
                      placeholder="250g Purely Paneer&#10;1 tbsp Ghee&#10;1 tsp Garam Masala"
                      className="w-full px-3 py-2 rounded-xl border border-[#CFC5B4] bg-white text-xs text-[#142E20] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-wider uppercase text-[#142E20] mb-1">
                      Preparation Steps (One per line)
                    </label>
                    <textarea
                      rows={3}
                      value={newSteps}
                      onChange={(e) => setNewSteps(e.target.value)}
                      placeholder="Cut paneer in cubes&#10;Sear in hot ghee for 2 mins&#10;Garnish with fresh herbs"
                      className="w-full px-3 py-2 rounded-xl border border-[#CFC5B4] bg-white text-xs text-[#142E20] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#EDE4D5]">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl text-xs font-medium text-[#4D6053] hover:bg-[#EFE7DA]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#142E20] hover:bg-[#1E4330] text-white px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider shadow-sm"
                  >
                    <Check className="w-4 h-4 text-[#539E72]" />
                    <span>PUBLISH RECIPE</span>
                  </button>
                </div>

              </form>

            </div>
          </div>
        )}

        {/* Modal 2: Rate & Review Recipe */}
        {ratingModalRecipe && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-[#FCFAF7] border border-[#DDD3C2] rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 border-b border-[#EDE4D5] mb-5">
                <h3 className="font-serif text-xl font-bold text-[#142E20]">
                  Rate This Recipe
                </h3>
                <button
                  type="button"
                  onClick={() => setRatingModalRecipe(null)}
                  className="p-1 rounded-full hover:bg-[#EFE7DA]"
                >
                  <X className="w-5 h-5 text-[#142E20]" />
                </button>
              </div>

              <div className="text-center mb-6">
                <p className="font-serif font-bold text-base text-[#142E20]">
                  {ratingModalRecipe.title}
                </p>
                <p className="text-xs text-[#526458] mt-1">
                  How did this recipe turn out with Purely Paneer?
                </p>

                {/* 5 Interactive Stars */}
                <div className="flex items-center justify-center gap-2 my-5">
                  {[1, 2, 3, 4, 5].map((starVal) => (
                    <button
                      key={starVal}
                      type="button"
                      onClick={() => setUserRating(starVal)}
                      className="p-1 hover:scale-120 transition-transform focus:outline-none"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          starVal <= userRating
                            ? 'fill-[#E28C37] text-[#E28C37]'
                            : 'text-[#C9BFB0]'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <span className="text-xs font-bold text-[#142E20]">
                  {userRating === 5
                    ? '5 Stars — Absolutely Delicious!'
                    : userRating === 4
                    ? '4 Stars — Very Good'
                    : userRating === 3
                    ? '3 Stars — Average'
                    : '2 or 1 Stars'}
                </span>
              </div>

              <form onSubmit={handleRatingSubmit} className="space-y-4">
                <textarea
                  rows={3}
                  value={ratingComment}
                  onChange={(e) => setRatingComment(e.target.value)}
                  placeholder="Share a quick tip or how tender the paneer was (optional)..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#CFC5B4] bg-white text-xs text-[#142E20] focus:outline-none"
                />

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#EDE4D5]">
                  <button
                    type="button"
                    onClick={() => setRatingModalRecipe(null)}
                    className="px-4 py-2 text-xs text-[#4F6255] hover:bg-[#EFE7DA] rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#142E20] hover:bg-[#1E4330] text-white px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider"
                  >
                    SUBMIT RATING
                  </button>
                </div>
              </form>

            </div>
          </div>
        )}

      </div>
    </main>
  );
}
