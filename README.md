# Next.js router.push Warning: Inconsistent pathname and query parameters

This repository demonstrates a common warning encountered when using the `router.push` method in Next.js. The warning arises from providing conflicting information in the pathname and query parameters.

## Problem

The `bug.js` file shows how providing a pathname with implicit query parameters and explicit query parameters in the second argument of `router.push` can lead to a warning. 

## Solution

The `bugSolution.js` file shows the correct way to handle this situation. Ensure your pathname and query parameters are consistent or use only one method to provide query parameters. 