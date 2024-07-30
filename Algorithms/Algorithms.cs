using Newtonsoft.Json.Linq;
using System;
using System.Linq;

namespace DeveloperSample.Algorithms
{
    public static class Algorithms
    {
        public static int GetFactorial(int n)
        {
            int resp = n;
            for (int countr = n - 1; countr > 0; countr--)
            {
                resp *= countr;
            }
            return resp;
        }

        public static string FormatSeparators(params string[] items)
        {
            var resp = string.Join(", ", items.Take(items.Length - 1));

            if (items.Length > 1)
                resp += $" and {items.Last()}";

            return resp;
        }
    }
}