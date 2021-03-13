using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JokesWebApp.Models
{
    public class Joke
    {
        // auto-gen properties in C# with "prop"
        public int Id { get; set; }
        public string JokeQuestion { get; set; }
        public string JokeAnswer { get; set; }

        public Joke()
        {
            // auto-gen constructor in C# with "ctor"
            // leaving code in this constructor empty
        }
    }
}
