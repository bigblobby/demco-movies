<?php
/**
 * Created by PhpStorm.
 * User: Tom
 * Date: 13/07/2019
 * Time: 14:45
 */

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api")
 */
class ApiController extends AbstractController
{
    /**
     * @Route("/background-poster", methods={"GET"})
     */
    public function backgroundPoster()
    {
        $url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' . $this->getParameter('movieAPI') . '&language=en-GB&page=1';
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_URL, $url);
        $result = curl_exec($ch);

        return new Response($result);
    }

    /**
     * @Route("/movie-details", methods={"POST"})
     */
    public function movieDetails(Request $request)
    {
        $data = json_decode($request->getContent());

        $url = 'https://api.themoviedb.org/3/movie/' . $data->id . '?api_key=' . $this->getParameter('movieAPI') . '&language=en-GB&append_to_response=credits';
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_URL, $url);
        $result = curl_exec($ch);

        return new Response($result);
    }

    /**
     * @Route("/search", methods={"POST"})
     */
    public function search(Request $request)
    {
        $data = json_decode($request->getContent());

        $url = 'https://api.themoviedb.org/3/search/movie?api_key=' . $this->getParameter('movieAPI') . '&language=en-GB&query=' . rawurlencode(utf8_encode($data->search)) .'&page=1&include_adult=false';
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_URL, $url);
        $result = curl_exec($ch);

        return new Response($result);
    }
}